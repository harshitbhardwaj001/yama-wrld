import React from 'react'
import '../../styles/globals.css'
import './apply.css'
import { client } from '../../lib/client';
import Layout from '../../components/Layout';

const Job = ({ job }) => {
  const {title, description, responsibilities, requirements, location, type} = job;

  const responsibility = responsibilities.split(".")
  const requirement = requirements.split(".")
  
  return (
    <Layout>
      <div className='flex w-full'>
        <div className='flex flex-col px-5 w-[40rem]'>
          <h1 className='text-[1.5rem] container pt-[8rem] text-black'>{title}</h1>
          <p className='text-[#6B7381] text-[0.8rem] ml-[2px]'>{location} {'//'} {type}</p>
          <p className='text-[1rem] container pt-[1rem] text-black'>{description}</p>
          <h2 className='text-[1.2rem] font-black text-black mt-[20px]'>Responsibilities :</h2>
          {responsibility.map((res, i) => i+1 !== responsibility.length?<p key={i} className='text-[1rem] container pt-[1rem] text-black list-item list-disc'>{res}</p>:"")}
          <h2 className='text-[1.2rem] font-black text-black mt-[20px]'>Requirements :</h2>
          {requirement.map((res, i) => i+1 !== requirement.length?<p key={i} className='text-[1rem] container pt-[1rem] text-black list-item list-disc'>{res}</p>:"")}
        </div>
        <div className='text-black pt-[8rem] right-[20rem] fixed'>
          <div className="select-none hidden md:block fixed right-5 bottom-5 bg-[#000] text-white w-[550px] rounded-md p-5">
          <form className="flex flex-col gap-2 ">
          <h2 className="text-lg font-bold uppercase mb-3">Apply for This Role</h2>
          <div className=""><label htmlFor="fullName">
          <input type="text" id="fullName" name="fullName" placeholder="Full name" className="bg-[rgba(255,255,255,0.05)] rounded-sm px-3 py-2 w-full" />
          <span className="sr-only">Full name</span>
          </label>
          </div>
          <div className="">
          <label htmlFor="phoneNumber">
          <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Phone number" className="bg-[rgba(255,255,255,0.05)] rounded-sm px-3 py-2 w-full"/>
          <span className="sr-only">Phone number</span>
          </label>
          </div>
          <div className="">
          <label htmlFor="email">
          <input type="text" id="email" name="email" placeholder="Email" className="bg-[rgba(255,255,255,0.05)] rounded-sm px-3 py-2 w-full" />
          <span className="sr-only">Email</span>
          </label>
          </div>
          <div className="py-2 flex items-center gap-3">
          <label htmlFor="resume" className="cursor-text shrink-0 pl-3">Resume*</label>
          <div className="flex w-full overflow-hidden space-between items-center">
          <input className=" text-xs" type="file" name="file" />
          </div>
          </div>
          <div className="">
          <label htmlFor="linkedin">
          <input type="text" id="linkedin" name="linkedin" placeholder="LinkedIn (optional)" className="bg-[rgba(255,255,255,0.05)] rounded-sm px-3 py-2 w-full" />
          <span className="sr-only">LinkedIn (optional)</span></label></div>
          <div className="">
          <label htmlFor="portfolio">
          <input type="text" id="portfolio" name="portfolio" placeholder="Link to portfolio (optional)" className="bg-[rgba(255,255,255,0.05)] rounded-sm px-3 py-2 w-full" />
          <span className="sr-only">Link to portfolio (optional)</span>
          </label>
          </div>
          <div className="">
          <label htmlFor="other">
          <input type="text" id="other" name="other" placeholder="Additional (optional)" className="bg-[rgba(255,255,255,0.05)] rounded-sm px-3 py-2 w-full"/>
          <span className="sr-only">Additional (optional)</span>
          </label>
          </div>
          <button className=" bg-white font-[500] disabled py-4 md:h-12 text-sm md:text-base text-black flex items-center justify-center uppercase md:w-full mt-auto md:mt-6 rounded w-[calc(100%+1rem)] -ml-2 md:ml-0" type="submit">Submit Application</button>
          </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "jobListing"] {jobId}`;

  const jobs = await client.fetch(query);

  const paths = jobs.map((job) => ({
    params: {
      jobId: job.jobId,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { jobId } }) => {
  const query = `*[_type == "jobListing" && jobId == '${jobId}'][0]`;
  const job = await client.fetch(query);

  return {
    props: { job },
  };
};

export default Job