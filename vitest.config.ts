/// <reference types="vitest" />
import { getViteConfig } from "astro/config";

export default getViteConfig({
  test: {
    exclude: ["**/node_modules/**", "**/integration/playwright/**"],
    alias: {
      "@/": new URL("./src/", import.meta.url).pathname,
    },
  },
});
