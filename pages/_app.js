import { StylesStyles } from "../ui-styles/styles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <StylesStyles />
    </>
  );
}

export default MyApp;
