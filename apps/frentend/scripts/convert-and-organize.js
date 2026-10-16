const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const assetsDir = path.join(publicDir, 'assets');
const patientsDir = path.join(publicDir, 'patients');
const targetImagesDir = path.join(publicDir, 'images');

const mapping = [
  // ── Brand ──
  {
    src: path.join(assetsDir, 'logo.png'),
    destFolder: 'brand',
    destName: 'logo.webp',
    keepPng: true
  },

  // ── Hero Patient Cards ──
  {
    src: path.join(assetsDir, 'kashyap.png'),
    destFolder: 'hero',
    destName: 'patient-kashyap.webp'
  },
  {
    src: path.join(assetsDir, 'deepak.png'),
    destFolder: 'hero',
    destName: 'patient-deepak.webp'
  },
  {
    src: path.join(assetsDir, 'Abhishek.png'),
    destFolder: 'hero',
    destName: 'patient-abhishek.webp'
  },
  {
    src: path.join(assetsDir, 'ranbeer.png'),
    destFolder: 'hero',
    destName: 'patient-ranbeer.webp'
  },

  // ── Transformations (Before / After) ──
  {
    src: path.join(assetsDir, 'patient', 'red.png'),
    destFolder: 'transformations',
    destName: 'case-01-before.webp'
  },
  {
    src: path.join(assetsDir, 'patient', 'sky.png'),
    destFolder: 'transformations',
    destName: 'case-01-after.webp'
  },
  {
    src: path.join(assetsDir, 'patient', 'blue.png'),
    destFolder: 'transformations',
    destName: 'case-02-before.webp'
  },
  {
    src: path.join(assetsDir, 'patient', 'yellow.png'),
    destFolder: 'transformations',
    destName: 'case-02-after.webp'
  },
  {
    src: path.join(assetsDir, 'patient', 'green.png'),
    destFolder: 'transformations',
    destName: 'case-03-before.webp'
  },
  {
    src: path.join(assetsDir, 'patient', 'white.png'),
    destFolder: 'transformations',
    destName: 'case-03-after.webp'
  },
  {
    src: path.join(assetsDir, 'patient', 'black.png'),
    destFolder: 'transformations',
    destName: 'case-04-before.webp'
  },
  {
    src: path.join(assetsDir, 'patient', 'dark_blue.png'),
    destFolder: 'transformations',
    destName: 'case-04-after.webp'
  },
  {
    src: path.join(assetsDir, 'beforeandafter.png'),
    destFolder: 'transformations',
    destName: 'before-and-after-banner.webp'
  },

  // ── Why Choose India ──
  {
    src: path.join(assetsDir, 'aeroplane.png'),
    destFolder: 'why-india',
    destName: 'flight.webp'
  },
  {
    src: path.join(assetsDir, 'coins.png'),
    destFolder: 'why-india',
    destName: 'affordable-costs.webp'
  },
  {
    src: path.join(assetsDir, 'shiled.png'),
    destFolder: 'why-india',
    destName: 'verified-shield.webp'
  },
  {
    src: path.join(assetsDir, 'mahal.png'),
    destFolder: 'why-india',
    destName: 'taj-mahal.webp'
  },
  {
    src: path.join(assetsDir, 'hospital.png'),
    destFolder: 'why-india',
    destName: 'accredited-hospital.webp'
  },

  // ── Process & Clinic ──
  {
    src: path.join(assetsDir, 'dentist_wave.png'),
    destFolder: 'process',
    destName: 'dentist-procedure.webp'
  },
  {
    src: path.join(assetsDir, 'second1.png'),
    destFolder: 'process',
    destName: 'journey-step-01.webp'
  },
  {
    src: path.join(assetsDir, 'second2.png'),
    destFolder: 'process',
    destName: 'journey-step-02.webp'
  },
  {
    src: path.join(assetsDir, 'second3.png'),
    destFolder: 'process',
    destName: 'journey-step-03.webp'
  },
  {
    src: path.join(assetsDir, 'step1.jpg'),
    destFolder: 'process',
    destName: 'clinical-step-01.webp'
  },
  {
    src: path.join(assetsDir, 'step2.jpg'),
    destFolder: 'process',
    destName: 'clinical-step-02.webp'
  },
  {
    src: path.join(assetsDir, 'step-3.jpg'),
    destFolder: 'process',
    destName: 'clinical-step-03.webp'
  },
  {
    src: path.join(assetsDir, 'step4.jpg'),
    destFolder: 'process',
    destName: 'clinical-step-04.webp'
  },

  // ── Clinic Building ──
  {
    src: path.join(assetsDir, 'modern.png'),
    destFolder: 'clinic',
    destName: 'modern-building.webp'
  },

  // ── Reviews Avatars ──
  {
    src: path.join(patientsDir, 'rohan-mehta.jpg'),
    destFolder: 'reviews',
    destName: 'rohan-mehta.webp'
  },
  {
    src: path.join(patientsDir, 'amit-sharma.jpg'),
    destFolder: 'reviews',
    destName: 'amit-sharma.webp'
  },
  {
    src: path.join(patientsDir, 'patient-1.jpg'),
    destFolder: 'reviews',
    destName: 'patient-1.webp'
  },
  {
    src: path.join(patientsDir, 'patient-2.jpg'),
    destFolder: 'reviews',
    destName: 'patient-2.webp'
  },
  {
    src: path.join(patientsDir, 'patient-3.jpg'),
    destFolder: 'reviews',
    destName: 'patient-3.webp'
  },
  {
    src: path.join(patientsDir, 'patient-4.jpg'),
    destFolder: 'reviews',
    destName: 'patient-4.webp'
  }
];

async function run() {
  console.log('Starting image conversion and organization...');

  for (const item of mapping) {
    if (!fs.existsSync(item.src)) {
      console.warn(`Source file not found: ${item.src}`);
      continue;
    }

    const targetDir = path.join(targetImagesDir, item.destFolder);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const targetFile = path.join(targetDir, item.destName);
    
    const srcSize = fs.statSync(item.src).size;
    await sharp(item.src)
      .webp({ quality: 85, effort: 4 })
      .toFile(targetFile);
    const destSize = fs.statSync(targetFile).size;

    const savings = (((srcSize - destSize) / srcSize) * 100).toFixed(1);
    console.log(
      `Converted: ${path.basename(item.src)} (${(srcSize / 1024).toFixed(0)} KB) -> ` +
      `${item.destFolder}/${item.destName} (${(destSize / 1024).toFixed(0)} KB) [${savings}% smaller]`
    );

    if (item.keepPng) {
      // Also copy PNG version
      const pngDest = path.join(targetDir, path.basename(item.src));
      fs.copyFileSync(item.src, pngDest);
    }
  }

  // Also copy wave.mp4 to images/hero/wave.mp4 if present
  const waveSrc = path.join(assetsDir, 'wave.mp4');
  if (fs.existsSync(waveSrc)) {
    const heroDir = path.join(targetImagesDir, 'hero');
    if (!fs.existsSync(heroDir)) fs.mkdirSync(heroDir, { recursive: true });
    fs.copyFileSync(waveSrc, path.join(heroDir, 'wave.mp4'));
    console.log('Copied hero video: wave.mp4 -> images/hero/wave.mp4');
  }

  console.log('Image organization and WebP conversion complete!');
}

run().catch(console.error);
