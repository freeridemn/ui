import { defineConfig } from "@pandacss/dev";

import freeridePreset from "lib/panda/freeride.preset";

/**
 * 🐼 Panda configuration.
 */
const pandaConfig = defineConfig({
  // enable CSS reset
  preflight: true,
  include: ["src/**/*.{ts,tsx,mdx}"],
  outdir: "src/generated/panda",
  presets: ["@pandacss/dev/presets", freeridePreset],
  // set JSX factory name
  jsxFactory: "panda",
  jsxFramework: "react",
  studio: {
    logo: "https://github.com/freeridemn/ui/blob/master/public/img/logo.png?raw=true",
  },
  // TODO remove static CSS pregeneration
  staticCss: {
    recipes: {},
  },
});

export default pandaConfig;
