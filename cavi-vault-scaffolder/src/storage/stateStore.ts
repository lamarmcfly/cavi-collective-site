import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export async function loadJsonFile<T>(filePath: string, fallback: T): Promise<T> {
  try {
    const content = await readFile(filePath, "utf-8");
    return JSON.parse(content) as T;
  } catch {
    return fallback;
  }
}

export async function saveJsonFile<T>(filePath: string, data: T): Promise<void> {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
}

export async function appendLine(filePath: string, line: string): Promise<void> {
  await mkdir(path.dirname(filePath), { recursive: true });
  let existing = "";
  try {
    existing = await readFile(filePath, "utf-8");
  } catch {
    existing = "";
  }
  await writeFile(filePath, existing.length > 0 ? `${existing}\n${line}` : line, "utf-8");
}
