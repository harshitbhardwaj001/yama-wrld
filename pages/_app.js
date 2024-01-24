import React from "react";
// import './index.css'

function MyApp({ Component, pageProps }) {
  return (
    // <LayoutEmpty>
    <Component {...pageProps} />
    /* </LayoutEmpty> */
  );
}

export default MyApp;
