export default {
  colors: {
    text: "#111",
    background: "#fff",
    primary: "tomato",
    secondary: "#3f3f3f",
    muted: "#e0e0e0",
    highlight: "#9f9f9f",
    gray: "#6c6c6c",
    accent: "#3f3f3f",
    modes: {
      dark: {
        text: "#fff",
        background: "#000",
        primary: "tomato",
      },
    },
  },
  fonts: {
    body: "Comic Sans MS",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72, 96],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  buttons: {
    outlined: {
      color: "text",
      textDecoration: "none",
      border: "1px solid currentColor",
      borderRadius: 4,
      px: 3,
      py: 2,
      "svg, path": {
        fill: "currentColor",
      },
    },
    withIcon: {
      variant: "buttons.outlined",
      display: "grid",
      gap: "14px",
      gridTemplateColumns: "auto auto",
      alignSelf: "flex-start",
      alignItems: "self-end",
    },
  },
  links: {
    snippet: {
      fontSize: [3, 4],
      color: "text",
      textDecoration: "none",
    },
  },
  text: {
    date: {
      snippet: {
        fontSize: 1,
        opacity: 0.6,
      },
    },
  },
};
