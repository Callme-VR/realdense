import "dotenv/config";
import express from "express";
import cors from "cors";
import { prisma } from "./db/dbconfig";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "Realdense backend is running" });
});

app.get("/health", async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ status: "ok", backend: "running", database: "connected" });
  } catch (err) {
    res.status(500).json({
      status: "error",
      backend: "running",
      database: "disconnected",
      error: err instanceof Error ? err.message : String(err),
    });
  }
});

const PORT = Number(process.env.PORT) || 3001;

async function start() {
  try {
    await prisma.$queryRaw`SELECT 1`;
    console.log("✅ Database connected");
  } catch (err) {
    console.error("❌ Database connection failed:", err);
  }

  app.listen(PORT, () => {
    console.log(`🚀 Backend running on http://localhost:${PORT}`);
  });
}

start();

process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});