import React from 'react'
import LayoutEmpty from '../components/LayoutEmpty'
// import './index.css'


function MyApp({ Component, pageProps }) {
  return (
    // <LayoutEmpty>
    <Component {...pageProps} />
    /* </LayoutEmpty> */
  )
}

export default MyApp