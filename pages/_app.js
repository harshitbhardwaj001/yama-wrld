import React from 'react'

import { LayoutStreet } from '../components'

function MyApp({ Component, pageProps }) {
  return (
    // <LayoutStreet>
    <>
    <Component {...pageProps} />
    </>
    /* </LayoutStreet> */
  )
}

export default MyApp
