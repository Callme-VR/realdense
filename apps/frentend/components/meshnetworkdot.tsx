"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  width?: number;
  height?: number;
  top?: number;
  left?: number;
  delayMs?: number; // Figma: After delay 65ms
  durationMs?: number; // Figma: Smart animate, 1200ms
  className?: string;
  children?: ReactNode;
};

// Figma variants: default (faint) -> Variant2 (bright)
const FAINT = { opacity: 0.19 };
const BRIGHT = { opacity: 0.5 };
const EASE_OUT = "cubic-bezier(0, 0, 0.58, 1)"; // Figma "Ease out"

const COLS = 26;
const ROWS = 9;
const RGB = "0, 168, 255"; // #00a8ff

type MeshNode = {
  x: number;
  y: number;
  ph: number;
  s: number; // depth scale: 0.35 (far) -> 1 (near)
  linkR: boolean;
  linkD: boolean;
  linkDR: boolean;
};

// Seeded RNG so the mesh looks identical on every render/resize
function rng(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function MeshBackground({
  width = 1956,
  height = 777,
  top = 20,
  left = 20,
  delayMs = 65,
  durationMs = 1200,
  className,
  children,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [active, setActive] = useState(false); // false = default variant, true = Variant2
  const [instant, setInstant] = useState(false); // reduced motion: skip the transition

  // Interaction: after delay -> change to Variant2 (smart animate, ease out)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInstant(true);
      setActive(true);
      return;
    }
    const id = setTimeout(() => setActive(true), delayMs);
    return () => clearTimeout(id);
  }, [delayMs]);

  // Mesh drawing - dots remain completely in constant position, no movement of individual dots
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let w = 0;
    let h = 0;
    let nodes: MeshNode[][] = [];

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Dots remain in constant position, no individual movement
      const pos = nodes.map((row) =>
        row.map((n) => ({
          x: n.x,
          y: n.y,
        }))
      );

      ctx.lineWidth = 1;
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const n = nodes[r][c];
          const a = pos[r][c];
          ctx.strokeStyle = `rgba(${RGB}, ${0.15 + 0.35 * n.s})`;
          ctx.beginPath();
          if (n.linkR && c < COLS - 1) {
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(pos[r][c + 1].x, pos[r][c + 1].y);
          }
          if (n.linkD && r < ROWS - 1) {
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(pos[r + 1][c].x, pos[r + 1][c].y);
          }
          if (n.linkDR && r < ROWS - 1 && c < COLS - 1) {
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(pos[r + 1][c + 1].x, pos[r + 1][c + 1].y);
          }
          ctx.stroke();
        }
      }

      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const n = nodes[r][c];
          const a = pos[r][c];
          const rx = 2 + 3 * n.s;
          ctx.fillStyle = `rgba(${RGB}, ${0.5 + 0.5 * n.s})`;
          ctx.beginPath();
          ctx.ellipse(a.x, a.y, rx, rx * 0.7, 0, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const rand = rng(7);
      nodes = [];
      for (let r = 0; r < ROWS; r++) {
        const t = r / (ROWS - 1);
        const s = 0.35 + 0.65 * t;
        const baseY = h * 1.05 * Math.pow(t, 1.7); // rows spread out toward the viewer
        const row: MeshNode[] = [];
        for (let c = 0; c < COLS; c++) {
          const baseX = (c / (COLS - 1)) * 1.1 * w - 0.05 * w;
          row.push({
            x: baseX + (rand() - 0.5) * (w / COLS) * 0.9,
            y: baseY + (rand() - 0.5) * h * 0.12 * s,
            ph: rand() * Math.PI * 2,
            s,
            linkR: rand() > 0.15,
            linkD: rand() > 0.1,
            linkDR: rand() > 0.55,
          });
        }
        nodes.push(row);
      }
      draw();
    };

    build();

    const ro = new ResizeObserver(() => {
      build();
    });
    ro.observe(canvas);

    return () => {
      ro.disconnect();
    };
  }, []);

  const v = active ? BRIGHT : FAINT;
  const transition = instant ? "none" : `opacity ${durationMs}ms ${EASE_OUT}`;

  return (
    <div
      className={className}
      style={{
        position: "absolute", // parent must be position: relative
        top,
        left,
        width,
        height,
        overflow: "hidden",
        background: "linear-gradient(to right, #061d3a, #163e71)",
      }}
    >
      <style>{`
        @keyframes meshComponentFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .mesh-network-animated {
          animation: meshComponentFloat 4.5s ease-in-out infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .mesh-network-animated {
            animation: none !important;
          }
        }
      `}</style>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="mesh-network-animated"
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          height: "55%",
          opacity: v.opacity,
          transition,
          pointerEvents: "none",
          maskImage: "linear-gradient(to bottom, transparent, black 45%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 45%)",
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}