import defaultTheme from "./default";

import { createMuiTheme } from "@material-ui/core";

const overrides = {
  typography: {
    h1: {
      fontSize: "3rem",
    },
    h2: {
      fontSize: "2rem",
    },
    h3: {
      fontSize: "1.64rem",
    },
    h4: {
      fontSize: "1.5rem",
    },
    h5: {
      fontSize: "1.285rem",
    },
    h6: {
      fontSize: "1.142rem",
    },
  },
  breakpoints: {
    values: {
      lg: 620,
      md: 610,
      sm: 600,
      xl: 630,
      xs: 0,
    },
  },
};

const themes = {
  default: createMuiTheme({ ...defaultTheme, ...overrides }),
};
console.log("themes: ", themes);
export default themes;
