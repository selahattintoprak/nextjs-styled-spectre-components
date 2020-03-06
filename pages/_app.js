import styles from "../styles/style.scss";

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
