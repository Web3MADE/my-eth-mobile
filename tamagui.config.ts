// @tamagui/core doesn't include `createMedia` so that it can avoid

// a dependency on react-native. If you are using tamagui, you can

// import createMedia from there directly and avoid this line:

import { createMedia } from "@tamagui/react-native-media-driver";

import {
  TamaguiInternalConfig,
  createFont,
  createTamagui,
  createTokens,
} from "tamagui";
// Create a font:
// To work with the tamagui UI kit styled components (which is optional)

// you'd want the keys used for `size`, `lineHeight`, `weight` and

// `letterSpacing` to be consistent. The `createFont` function

// will fill-in any missing values if `lineHeight`, `weight` or

// `letterSpacing` are subsets of `size`.
const interFont = createFont({
  family: "Inter, Helvetica, Arial, sans-serif",

  size: {
    true: 12,

    2: 14,

    3: 15,
  },

  lineHeight: {
    // 1 will be 22
    true: 22,
  },

  weight: {
    1: "300",

    true: "400",
    3: "600",
  },

  letterSpacing: {
    true: 0,

    2: -1,
  },

  // (native only) swaps out fonts by face/style

  face: {
    true: { normal: "InterLight", italic: "InterItalic" },

    600: { normal: "InterBold" },
  },
});
// Set up our tokens
// The keys can be whatever you want, but we do recommend keeping them

// consistent across the different token categories and intended for

// usage together to make nice designs - eg for a Button to use.
const size = {
  true: 0,

  1: 5,

  2: 10,

  // ....
};
/**
 * @dev
 * tokens allow css vars to be used throughout app
 * pass "true" token that maps to your default size, this wayu it knows what token to use by default.
 * */
export const tokens = createTokens({
  size,

  space: { ...size, "-1": -5, "-2": -10 },

  radius: { 0: 0, 1: 3 },

  zIndex: { 0: 0, 1: 100, 2: 200 },

  color: {
    black: "#000000",
    white: "#ffffff",
    gray: "#8e8e93",
    green: "#34c759",
    red: "#ff3b30",
    darkBackground: "#1c1c1e",
    darkerBackground: "#2c2c2e",
    lightBackground: "#3a3a3c",
  },
});

const config: TamaguiInternalConfig = createTamagui({
  fonts: {
    // for tamagui, heading and body are assumed

    heading: interFont,

    body: interFont,
  },
  // generate variables in your theme and app
  tokens,
  // For more on themes, see the Themes page
  /** @dev define you design theme, which map to CSS properties */
  themes: {
    light: {
      bg: "#f2f2f2",

      color: tokens.color.black,
    },
    dark: {
      background: "$darkBackground",
      backgroundStrong: "$darkerBackground",
      backgroundSoft: "$lightBackground",
      color: "$white",
      colorMuted: "$gray",
      positive: "$green",
      negative: "$red",
    },
  },
  // For web-only, media queries work out of the box and you can avoid the

  // `createMedia` call here by passing the media object directly.

  // If you are going to target React Native, use `createMedia` (it's an identity

  // function on web so you can import it there without concern).
  /** @dev define reusable responsive media queries */
  media: createMedia({
    sm: { maxWidth: 860 },

    gtSm: { minWidth: 860 + 1 },

    short: { maxHeight: 820 },

    hoverNone: { hover: "none" },

    pointerCoarse: { pointer: "coarse" },
  }),
  // Shorthands

  // Adds <View m={10} /> to <View margin={10} />

  // See Settings section on this page to only allow shorthands

  // Be sure to have `as const` at the end
  /** @dev Define any props you want to expand to style values, keys being the shorthand and values being the expanded style prop */
  shorthands: {
    px: "paddingHorizontal",

    f: "flex",

    m: "margin",

    w: "width",
  } as const,
  // Change the default props for any styled() component with a name.

  // We are discouraging the use of this and have deprecated it, prefer to use

  // styled() on any component to change it's styles.

  defaultProps: {
    Text: {
      color: "green",
    },
  },
});
type AppConfig = typeof config;
// this will give you types for your components

// note - if using your own design system, put the package name here instead of tamagui

declare module "tamagui" {
  interface TamaguiCustomConfig extends AppConfig {}
  // if you want types for group styling props, define them like so:

  interface TypeOverride {
    groupNames(): "a" | "b" | "c";
  }
}
export default config;
