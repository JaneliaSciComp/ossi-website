import { defineConfig } from "astro/config";
import icon from "astro-icon";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://ossi.janelia.org",
  integrations: [
    icon(),
    react(),
  ],
  vite: {
    resolve: {
      noExternal: ["@mui/utils", "@mui/base"],
    },
  },
});
