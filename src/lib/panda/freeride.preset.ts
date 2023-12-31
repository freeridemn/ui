import { definePreset, defineTokens } from "@pandacss/dev";

import {
  animations,
  breakpoints,
  colors,
  conditions,
  easings,
  fonts,
  globalCss,
  keyframes,
  recipes,
  semanticTokens,
  slotRecipes,
  zIndex,
} from "lib/panda";

const tokens = defineTokens({
  animations,
  colors,
  easings,
  fonts,
  zIndex,
});

/**
 * Freeride MN Panda CSS preset.
 */
const freeridePreset = definePreset({
  conditions,
  globalCss,
  theme: {
    extend: {
      breakpoints,
      keyframes,
      recipes,
      semanticTokens,
      slotRecipes,
      tokens,
    },
  },
});

export default freeridePreset;
