import React from 'react';
import { client } from '../../lib/client';
import HeroBanner from '../../components/HeroBanner';
import { FooterBanner, Product } from '../../components';

const Street = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className='products-heading'>
        <h2>Latest Drop</h2>
        <p>Get your hands on the new drop before you miss it!!</p>
      </div>
      <div className='products-container'>
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>
  
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

export default Street;

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  };
};