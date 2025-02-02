import sharp from "sharp";
import fs from "fs/promises";

// Ensure output directories exist
await fs.mkdir("public", { recursive: true });
await fs.mkdir("public/icons", { recursive: true });

// Convert main app icon
const mainIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <!-- SVG content from app-icon-purple -->
  ...
</svg>`;

// Generate different sizes of the main icon
await sharp(Buffer.from(mainIcon))
  .resize(192, 192)
  .png()
  .toFile("public/android-chrome-192x192.png");

await sharp(Buffer.from(mainIcon))
  .resize(384, 384)
  .png()
  .toFile("public/android-chrome-384x384.png");

await sharp(Buffer.from(mainIcon))
  .resize(512, 512)
  .png()
  .toFile("public/android-chrome-512x512.png");

// Convert and save other icons
const bookingIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192">
  <!-- SVG content from booking-icon-purple -->
  ...
</svg>`;

await sharp(Buffer.from(bookingIcon))
  .resize(192, 192)
  .png()
  .toFile("public/icons/booking.png");

const servicesIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192">
  <!-- SVG content from services-icon-purple -->
  ...
</svg>`;

await sharp(Buffer.from(servicesIcon))
  .resize(192, 192)
  .png()
  .toFile("public/icons/services.png");
