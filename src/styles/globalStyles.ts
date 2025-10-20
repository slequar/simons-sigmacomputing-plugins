import { colors, typography } from "./theme";

export const globalStyles = `
  :root {
    font-family: ${typography.fontFamily};
    line-height: 1.5;
    font-weight: ${typography.fontWeight.normal.toString()};

    color-scheme: light dark;
    color: ${colors.textPrimary};
    background-color: ${colors.bgDark};

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }

  #root {
    width: 100%;
  }

  a {
    color: ${colors.primary};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #ffffff;
    }
    a {
      color: #0066cc;
    }
  }
`;
