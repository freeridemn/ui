import { defineRecipe } from "@pandacss/dev";

export const buttonRecipe = defineRecipe({
  className: "button",
  description: "The styles for the Button component",
  base: {
    cursor: "pointer",
    fontWeight: "medium",
    borderWidth: "1px",
    borderRadius: "md",
    borderColor: "transparent",
    display: "inline-flex",
    alignItems: "center",
    color: "fg.default",
    h: "fit-content",
    transitionProperty: "background-color, border-color, color",
    transitionDuration: "300ms",
    _focus: { outline: "none" },
    _disabled: {
      bgColor: "bg.disabled",
      cursor: "not-allowed",
      _hover: {
        bgColor: "bg.disabled",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
  variants: {
    variant: {
      primary: {
        borderColor: "accent.emphasized",
        color: "white",
        bgColor: "accent.emphasized",
        _hover: {
          bgColor: "accent.default",
          borderColor: "accent.default",
        },
        _disabled: {
          bgColor: "bg.disabled",
          cursor: "not-allowed",
          _hover: {
            bgColor: "bg.disabled",
          },
        },
      },
      secondary: {
        borderColor: "border.outline",
        bgColor: "bg.default",
        color: "fg.default",
        _hover: {
          background: "bg.muted",
        },
        _disabled: {
          borderColor: "border.disabled",
          color: "fg.disabled",
          cursor: "not-allowed",
          _hover: {
            background: "transparent",
            borderColor: "border.disabled",
            color: "fg.disabled",
          },
        },
      },
      ghost: {
        color: "fg.subtle",
        bgColor: "transparent",
        _hover: {
          color: "fg.default",
          bgColor: "bg.muted",
          borderColor: "bg.muted",
        },
        _disabled: {
          bgColor: "bg.disabled",
          cursor: "not-allowed",
          _hover: {
            bgColor: "bg.disabled",
          },
        },
      },
      default: {
        bgColor: "transparent",
        color: "fg.subtle",
        _hover: {
          color: "fg.default",
        },
        _disabled: {
          color: "fg.disabled",
          cursor: "not-allowed",
          _hover: {
            background: "transparent",
            color: "fg.disabled",
          },
        },
      },
    },
    size: {
      xs: {
        fontSize: "xs",
        px: 2,
        py: 0.5,
      },
      sm: {
        fontSize: "sm",
        px: 3,
        py: 1,
      },
      md: {
        fontSize: "md",
        px: 4,
        py: 1.5,
      },
      lg: {
        fontSize: "lg",
        px: 5,
        py: 2,
      },
    },
  },
});
