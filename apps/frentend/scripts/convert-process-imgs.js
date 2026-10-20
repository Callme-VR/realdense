const sharp = require('sharp');
const dir = './public/Fue_page_images';

[1, 2, 3, 4, 5].forEach(i => {
  sharp(`${dir}/process-${i}.png`)
    .webp({ quality: 85 })
    .toFile(`${dir}/process-${i}.webp`)
    .then(() => console.log(`process-${i}.webp done`))
    .catch(e => console.error(`process-${i} error:`, e.message));
});
