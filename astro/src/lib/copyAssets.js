import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copyDir = async (src, dest) => {
  try {
    await fs.mkdir(dest, { recursive: true });
    const entries = await fs.readdir(src, { withFileTypes: true });

    for (let entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);

      if (entry.isDirectory()) {
        await copyDir(srcPath, dest); // Changed destination to the single directory for all assets
      } else {
        await fs.copyFile(srcPath, destPath);
      }
    }
  } catch (error) {
    console.error('Error copying directory:', error);
  }
};

const sourceDir = path.join(__dirname, '../../../content/images');
const destinationDir = path.join(__dirname, '../assets');

copyDir(sourceDir, destinationDir)
  .then(() => console.log('Assets copied successfully.'))
  .catch((error) => console.error('Error copying directory:', error));
