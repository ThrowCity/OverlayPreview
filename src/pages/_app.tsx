import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';

import '../styles/index.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Overlay</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="Overlay"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
