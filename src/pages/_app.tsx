import "@/styles/globals.css";

import TebenganShell from "@/components/TebenganShell";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ride Together & Share Your Story!</title>
        <link rel="icon" href="/tebengan.png" />
      </Head>
      <main className={`${inter.variable} font-sans bg-white`}>
        <div>
          <TebenganShell>
            <Component {...pageProps} />
          </TebenganShell>
        </div>
      </main>
    </>
  );
}

export default App;
