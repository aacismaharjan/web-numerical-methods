import { AppProps } from 'next/app';
import Head from 'next/head';
import './../app/globals.css';
import RootLayout from '@/app/layout';
import Script from 'next/script';

function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=content-width" />
        <title>Web Numerical Methods</title>
        <meta
          name="description"
          content="Some numerical methods supported on web by Aashish Maharjan using Next.js"
        />
      </Head>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
      <Script src="https://unpkg.com/function-plot/dist/function-plot.js"></Script>
    </>
  );
}

export default MyApp;
