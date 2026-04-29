import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { readdir } from "node:fs/promises";
import path from "node:path";
import { loadEnvFiles } from "./env.mjs";

const root = process.cwd();
loadEnvFiles(root);

const dataDir = path.join(root, "Data");
const dryRun = process.argv.includes("--dry-run");

async function countFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  let count = 0;

  for (const entry of entries) {
    const absolutePath = path.join(directory, entry.name);
    count += entry.isDirectory() ? await countFiles(absolutePath) : 1;
  }

  return count;
}

function runScript(scriptName, args = []) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [path.join("scripts", scriptName), ...args], {
      cwd: root,
      env: process.env,
      stdio: "inherit"
    });

    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`${scriptName} exited with code ${code}`));
    });
  });
}

if (!existsSync(dataDir)) {
  throw new Error("Data directory is missing. Put exam and textbook files under Data/ first.");
}

const fileCount = await countFiles(dataDir);
if (!fileCount) {
  throw new Error("Data directory is empty. Put exam and textbook files under Data/ first.");
}

if (!process.env.BLOB_READ_WRITE_TOKEN && !dryRun) {
  throw new Error("BLOB_READ_WRITE_TOKEN is required. Add it to .env.local, .env, or your shell environment.");
}

console.log(`Found ${fileCount} material files in Data/.`);
await runScript("generate-storage-manifest.mjs");

if (dryRun) {
  await runScript("upload-data-to-blob.mjs", ["--dry-run"]);
  console.log("Dry run complete. Add BLOB_READ_WRITE_TOKEN and rerun without --dry-run to upload.");
} else {
  await runScript("upload-data-to-blob.mjs");
  await runScript("build-static.mjs");
  console.log("Blob activation complete. Commit storage/blob-upload-manifest.json with the app changes.");
}
