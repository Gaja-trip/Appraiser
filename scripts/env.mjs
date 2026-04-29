import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

function stripQuotes(value) {
  const trimmed = value.trim();
  const first = trimmed[0];
  const last = trimmed[trimmed.length - 1];

  if ((first === '"' && last === '"') || (first === "'" && last === "'")) {
    return trimmed.slice(1, -1);
  }

  return trimmed;
}

export function loadEnvFiles(root = process.cwd(), fileNames = [".env.local", ".env"]) {
  const loaded = [];

  for (const fileName of fileNames) {
    const filePath = path.join(root, fileName);
    if (!existsSync(filePath)) continue;

    const content = readFileSync(filePath, "utf8");
    loaded.push(fileName);

    for (const rawLine of content.split(/\r?\n/)) {
      const line = rawLine.trim();
      if (!line || line.startsWith("#")) continue;

      const normalized = line.startsWith("export ") ? line.slice(7).trim() : line;
      const equalsIndex = normalized.indexOf("=");
      if (equalsIndex === -1) continue;

      const key = normalized.slice(0, equalsIndex).trim();
      if (!key || process.env[key] !== undefined) continue;

      process.env[key] = stripQuotes(normalized.slice(equalsIndex + 1));
    }
  }

  return loaded;
}
