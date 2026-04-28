import { readdir, stat, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const dataDir = path.join(root, "Data");
const outDir = path.join(root, "storage");
const outFile = path.join(outDir, "data-manifest.json");

function normalizeKey(filePath) {
  return filePath.split(path.sep).join("/");
}

function inferCategory(relativePath) {
  if (relativePath.startsWith("기출문제/")) return "기출문제";
  if (relativePath.startsWith("자료/")) return "자료";
  if (relativePath.startsWith("회계원리(회계학)/")) return "강의자료";
  if (relativePath.startsWith("토익자료/")) return "기타";
  return "기본서";
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
    const relativePath = normalizeKey(path.relative(base, absolutePath));
    files.push({
      key: relativePath,
      localPath: `Data/${relativePath}`,
      category: inferCategory(relativePath),
      extension: path.extname(entry.name).slice(1).toLowerCase(),
      size: fileStat.size
    });
  }

  return files;
}

const files = await walk(dataDir);
await mkdir(outDir, { recursive: true });
await writeFile(outFile, `${JSON.stringify(files, null, 2)}\n`, "utf8");

console.log(`Wrote ${files.length} items to ${path.relative(root, outFile)}`);
