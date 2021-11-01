import Head from "next/head";

import App from "../components/App";
import Footer from "../components/Footer";

import AppStyles from "../styles/App.module.css";

export default function Layout() {
  return (
    <div className={AppStyles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <App />
      <Footer />
    </div>
  );
}
