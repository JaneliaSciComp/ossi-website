import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import react from "@astrojs/react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://astro.build/config
export default defineConfig({
  site: "https://ossi.janelia.org",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    icon(),
    react(),
  ],
  vite: {
    ssr: {
      noExternal: ["react-icons", "@mui/utils"],
    },
    plugins: [tsconfigPaths()],
  },
});
