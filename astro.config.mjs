/* eslint-disable turbo/no-undeclared-env-vars */
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";

//Frameworks
import svelte from "@astrojs/svelte";

// Hosting URL Config 
const SERVER_PORT = 3000;
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
const LIVE_SITE = "https://www.gerber.uno";
const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");
let BASE_SITE = LOCALHOST_URL;
let BASE_PATH = ""; //GitHub Repo Name  // Empty if custom domain

// When you're building your site in local or in CI, you could just set your URL manually
if (isBuild) {
  BASE_SITE = LIVE_SITE;
}

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  server: {
    port: SERVER_PORT
  },
  site: BASE_SITE,
  base: BASE_PATH,
  integrations: [sitemap(), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), 
  svelte(), 
  image({
    serviceEntryPoint: '@astrojs/image/sharp'
  })]
});