import React from 'react'
import { urlFor } from '../lib/client'
import "./comp.css"
import Image from 'next/image'

const FooterBanner = ({footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image }}) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          {/* <Link href={`/product/${product}`}>
            <button type='button'>
              {buttonText}
            </button>
          </Link> */}
        </div>
        <Image src={urlFor(image)} alt="image" className='footer-banner-image' />
      </div>
    </div>
  )
}

export default FooterBanner