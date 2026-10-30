import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let basePath = "";
let assetPrefix = "";

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY
    ? process.env.GITHUB_REPOSITORY.replace(/.*?\//, "")
    : "teddy-pups";
  basePath = `/${repo}`;
  assetPrefix = `/${repo}/`;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  outputFileTracingRoot: __dirname,
  basePath: basePath || undefined,
  assetPrefix: assetPrefix || undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "puppy.instabizweb.com",
      },
      {
        protocol: "https",
        hostname: "*.instabizweb.com",
      },
    ],
  },
};

export default nextConfig;
