export const site = {
  name: "Brandon Egger",
  url: "https://brandonegger.com",
  description: "Brandon Egger's personal website.",
  locale: "en_US",
} as const;

// Shapes from app/icon.svg, shared with the generated PNG icons and OG image.
export const logo = {
  viewBox: "0 0 64 64",
  tilde:
    "M14.66 30.92 9.79 30.37Q10.29 26.04 12.06 23.72Q13.83 21.4 16.73 21.4Q17.79 21.4 18.87 21.67Q19.95 21.95 20.96 22.55L25.01 24.89Q25.89 25.4 26.51 25.56Q27.13 25.72 27.59 25.72Q30.03 25.72 30.49 21.4L35.36 21.95Q34.86 26.41 33.06 28.78Q31.27 31.15 28.37 31.15Q27.36 31.15 26.23 30.85Q25.1 30.55 24.14 30L20.09 27.65Q19.22 27.15 18.62 26.99Q18.02 26.83 17.51 26.83Q15.08 26.83 14.66 30.92Z",
  slash: "M28.64 52.91 47.13 11.09H54.21L35.77 52.91Z",
  colors: {
    light: { bg: "#f5f7fa", ink: "#1d1f21", accent: "#1d5fae" },
    dark: { bg: "#121519", ink: "#e7e5df", accent: "#7cb4ff" },
  },
} as const;
