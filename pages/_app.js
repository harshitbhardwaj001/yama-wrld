import React from 'react'
// import './index.css'


function MyApp({ Component, pageProps }) {
  return (
    // <LayoutStreet>
    <Component {...pageProps} />
    /* </LayoutStreet> */
  )
}

export default MyApp