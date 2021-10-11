import Head from "next/head";
import { useState } from "react";

// Styles
import AppStyles from "../styles/App.module.css";

// Custom Components
import Quiz from "./Quiz";
import Welcome from "./Welcome";

export default function App() {
  const [formConfig, setFormConfig] = useState();
  const [started, setStarted] = useState(false);

  return (
    <>
      <Head>
        <title>Lets Get Quizy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={AppStyles.main}>
        {started ? (
          <Quiz {...formConfig} setStarted={setStarted} />
        ) : (
          <Welcome setFormConfig={setFormConfig} setStarted={setStarted} />
        )}
      </main>
    </>
  );
}
