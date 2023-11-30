import React from 'react'
import './career.css'
import Jobs from '../../components/Jobs'
import Layout from '../../components/Layout'
import { client } from '../../lib/client'
import Head from 'next/head'
// import '../../styles/globals.css'

const index = ({ jobListings }) => {
  return (
    <>
    <Head>
        <title>Careers - Yama Wrld</title>
      </Head>
    <Layout>
      <Jobs JobListings={jobListings}/>
    </Layout>
    </>
  )
}

export default index

export const getServerSideProps = async () => {
  const query = '*[_type == "jobListing"]';
  const jobListings = await client.fetch(query);
  console.log(jobListings)

  return {
    props: { jobListings }
  };
};