import { ThemeProvider } from "styled-components";
import theme from "../styled-spectre/theme";
import { StylesStyles } from "../ui-styles/styles";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <StylesStyles />
    </ThemeProvider>
  );
}

export default MyApp;
