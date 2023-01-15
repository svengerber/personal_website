// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Sven Gerber";
export const SITE_DESCRIPTION =
  "Welcome to my blog! I write about system and cloud engineering.";
export const TWITTER_HANDLE = "@mytwitterhandle";
export const MY_NAME = "Sven Gerber";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
