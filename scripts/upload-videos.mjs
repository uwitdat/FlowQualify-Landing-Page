#!/usr/bin/env node
import "dotenv/config";
import { put } from "@vercel/blob";
import { readFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

if (!process.env.BLOB_READ_WRITE_TOKEN) {
  console.error(
    "Missing BLOB_READ_WRITE_TOKEN. Create a Vercel Blob store at https://vercel.com/dashboard/stores, add the token to .env, then run again."
  );
  process.exit(1);
}

const files = [
  { path: "public/videos/flow-demo.mp4", name: "videos/flow-demo.mp4", env: "NEXT_PUBLIC_VIDEO_FLOW_DEMO" },
  { path: "public/videos/demo-1.mp4", name: "videos/demo-1.mp4", env: "NEXT_PUBLIC_VIDEO_DEMO_1" },
  { path: "public/videos/demo-2.mp4", name: "videos/demo-2.mp4", env: "NEXT_PUBLIC_VIDEO_DEMO_2" },
];

console.log("Uploading to Vercel Blob…\n");

for (const f of files) {
  const fullPath = join(root, f.path);
  try {
    const buf = await readFile(fullPath);
    const { url } = await put(f.name, buf, { access: "public" });
    console.log(`${f.env}=${url}`);
  } catch (e) {
    if (e.code === "ENOENT") {
      console.error(`File not found: ${f.path}. Run this from the project root with videos in public/videos/`);
    } else {
      console.error(`Failed to upload ${f.path}:`, e.message);
    }
    process.exit(1);
  }
}

console.log(
  "\nAdd the lines above to .env and .env.local. In Vercel: Project Settings → Environment Variables, add them for Production/Preview."
);
