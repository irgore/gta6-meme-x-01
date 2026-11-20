import { copyFile } from "node:fs/promises";
import { mkdir } from "node:fs/promises";

await mkdir("/output", { recursive: true });
await copyFile("POST.json", "/output/POST.json");
console.log("POST.json → /output/POST.json");