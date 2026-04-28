import { createReadStream } from "node:fs";
import { readdir, stat, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { Readable } from "node:stream";

const root = process.cwd();
const dataDir = path.join(root, "Data");
const outDir = path.join(root, "storage");
const outFile = path.join(outDir, "blob-upload-manifest.json");
const prefix = (process.env.MATERIALS_PATH_PREFIX || "appraiser-data").replace(/^\/+|\/+$/g, "");
const dryRun = process.argv.includes("--dry-run");

function normalizeKey(filePath) {
  return filePath.split(path.sep).join("/");
}

async function walk(directory, base = directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walk(absolutePath, base));
      continue;
    }

    const fileStat = await stat(absolutePath);
    const key = normalizeKey(path.relative(base, absolutePath));
    files.push({ absolutePath, key, size: fileStat.size });
  }

  return files;
}

if (!process.env.BLOB_READ_WRITE_TOKEN && !dryRun) {
  throw new Error("BLOB_READ_WRITE_TOKEN is required. Add a Vercel Blob store and pull env vars first.");
}

const files = await walk(dataDir);

if (dryRun) {
  console.log(`Would upload ${files.length} files to Vercel Blob under ${prefix}/`);
  for (const file of files.slice(0, 20)) {
    console.log(`${prefix}/${file.key}`);
  }
  if (files.length > 20) console.log(`...and ${files.length - 20} more`);
  process.exit(0);
}

const { put } = await import("@vercel/blob");
const uploads = [];

for (const file of files) {
  const pathname = `${prefix}/${file.key}`;
  const blob = await put(pathname, Readable.toWeb(createReadStream(file.absolutePath)), {
    access: "public"
  });

  uploads.push({
    key: file.key,
    pathname,
    url: blob.url,
    size: file.size
  });
  console.log(`Uploaded ${file.key}`);
}

await mkdir(outDir, { recursive: true });
await writeFile(outFile, `${JSON.stringify(uploads, null, 2)}\n`, "utf8");
console.log(`Wrote upload URL map to ${path.relative(root, outFile)}`);
