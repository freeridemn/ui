import { defineSemanticTokens } from "@pandacss/dev";

const semanticTokens = defineSemanticTokens({
  colors: {
    bg: {
      // canvas: {
      //   value: {
      //     base: "{colors.neutral.25}",
      //     _dark: "{colors.neutral.950}",
      //   },
      // },
      default: {
        value: { base: "{colors.white}", _dark: "{colors.zinc.900}" },
      },
      // subtle: {
      //   value: {
      //     base: "{colors.zinc.200}",
      //     _dark: "{colors.zinc.800}",
      //   },
      // },
      muted: {
        value: {
          base: "{colors.zinc.100}",
          _dark: "{colors.zinc.800}",
        },
      },
      // emphasized: {
      //   value: {
      //     base: "{colors.neutral.300}",
      //     _dark: "{colors.neutral.600}",
      //   },
      // },
      disabled: {
        value: {
          base: "{colors.neutral.200}",
          _dark: "{colors.neutral.700}",
        },
      },
    },
    fg: {
      default: {
        value: { base: "{colors.neutral.950}", _dark: "{colors.white}" },
      },
      // emphasized: {
      //   value: {
      //     base: "{colors.brand.primary.600}",
      //     _dark: "{colors.brand.primary.400}",
      //   },
      // },
      // muted: {
      //   value: {
      //     base: "{colors.neutral.600}",
      //     _dark: "{colors.neutral.300}",
      //   },
      // },
      subtle: {
        value: {
          base: "{colors.neutral.500}",
          _dark: "{colors.neutral.400}",
        },
      },
      disabled: {
        value: {
          base: "{colors.neutral.200}",
          _dark: "{colors.neutral.800}",
        },
      },
    },
    accent: {
      default: {
        value: {
          base: "{colors.brand.primary.500}",
          _dark: "{colors.brand.primary.500}",
        },
      },
      emphasized: {
        value: {
          base: "{colors.brand.primary.600}",
          _dark: "{colors.brand.primary.600}",
        },
      },
      // subtle: {
      //   value: {
      //     base: "{colors.brand.primary.50}",
      //     _dark: "{colors.brand.primary.900}",
      //   },
      // },
      // fg: {
      //   value: { base: "{colors.white}", _dark: "{colors.neutral.950}" },
      // },
    },

    border: {
      // default: {
      //   value: {
      //     base: "{colors.neutral.200}",
      //     _dark: "{colors.neutral.800}",
      //   },
      // },
      // subtle: {
      //   value: {
      //     base: "{colors.neutral.300}",
      //     _dark: "{colors.neutral.600}",
      //   },
      // },
      // emphasized: {
      //   value: {
      //     base: "{colors.brand.primary.600}",
      //     _dark: "{colors.brand.primary.400}",
      //   },
      // },
      outline: {
        value: {
          base: "{colors.zinc.200}",
          _dark: "{colors.zinc.700}",
        },
      },
      // accent: {
      //   value: {
      //     base: "{colors.brand.primary.500}",
      //     _dark: "{colors.brand.primary.500}",
      //   },
      // },
      disabled: {
        value: {
          base: "{colors.neutral.200}",
          _dark: "{colors.neutral.800}",
        },
      },
    },
  },
});

export default semanticTokens;
