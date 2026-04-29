import { mkdir, readFile, rm, writeFile, copyFile } from "node:fs/promises";
import path from "node:path";
import { loadEnvFiles } from "./env.mjs";

const root = process.cwd();
loadEnvFiles(root);

const dist = path.join(root, "dist");

const staticFiles = [
  "index.html",
  "lectures.html",
  "materials.html",
  "problems.html",
  "practice.html",
  "analysis.html",
  "resources.html",
  "qa.html",
  "login.html",
  "styles.css",
  "app.js"
];

const materialsBaseUrl =
  process.env.NEXT_PUBLIC_MATERIALS_BASE_URL ||
  process.env.MATERIALS_BASE_URL ||
  "";

const materialsPathPrefix =
  process.env.NEXT_PUBLIC_MATERIALS_PATH_PREFIX ||
  process.env.MATERIALS_PATH_PREFIX ||
  "";

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const file of staticFiles) {
  await copyFile(path.join(root, file), path.join(dist, file));
}

await writeFile(
  path.join(dist, "config.js"),
  `window.APP_CONFIG = ${JSON.stringify({
    materialsBaseUrl,
    materialsPathPrefix
  }, null, 2)};\n`,
  "utf8"
);

const uploadManifestPath = path.join(root, "storage", "blob-upload-manifest.json");
let storageUrls = {};

try {
  const uploadManifest = JSON.parse(await readFile(uploadManifestPath, "utf8"));
  storageUrls = Object.fromEntries(uploadManifest.map((item) => [item.key, item.url]));
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}

await writeFile(
  path.join(dist, "storage-map.js"),
  `window.APP_STORAGE_URLS = ${JSON.stringify(storageUrls, null, 2)};\n`,
  "utf8"
);

console.log(`Built static site to ${path.relative(root, dist)}`);
