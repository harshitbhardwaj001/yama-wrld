import React from 'react'
import Job from './Job'
import '../styles/globals.css'



const Jobs = ({ JobListings }) => {
  return (
    <div className='w-[65rem]'>
        <h1 className='text-[3rem] container pt-[8rem] text-black'>Careers</h1>
        <p className='text-[1rem] pt-[1rem] ml-[5px] text-black'>Yama is hiring! We&apos;re looking for passionate individuals who are driven to make a difference and thrive in a collaborative environment. As part of our team, you&apos;ll have the opportunity to work on cutting-edge projects, unleash your creativity, and contribute to our mission of revolutionizing the Anime x Web3 industry!</p>
        <div className='jobs-container'>
        {JobListings?.map((jobListing) => <Job key={jobListing.id} product={jobListing} />)}
      </div>
    </div>
  )
}

export default Jobs