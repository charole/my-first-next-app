import React, {useEffect} from 'react';
import Header from '../components/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          margin: 0;
          font-family: 'Noto Sans, Noto Sans KR';
        }
      `}</style>
    </>
  );
}

export default MyApp;
