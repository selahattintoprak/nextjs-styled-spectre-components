import { ThemeProvider } from "styled-components";
import theme from "../styled-spectre/theme";
import { StylesStyles } from "../ui-styles/styles";
import GlobalStyles from "../styled-spectre/GlobalStyles";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <StylesStyles />
      <GlobalStyles asian={true} />
    </ThemeProvider>
  );
}

export default MyApp;
