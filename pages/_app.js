import styles from "../ui-styles/styles.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />{" "}
      <style jsx global>
        {styles}
      </style>
    </>
  );
}

export default MyApp;
