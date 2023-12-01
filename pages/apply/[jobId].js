import React, { useState } from 'react'
import '../../styles/globals.css'
import './apply.css'
import { client } from '../../lib/client';
import Layout from '../../components/Layout';
import { useRef } from 'react';
import emailjs from "@emailjs/browser";
import close from '../../assets/close.svg';
import Image from 'next/image';

const Job = ({ job }) => {
  const {title, description, responsibilities, requirements, location, type} = job;

  const [toggle, setToggle] = useState(false);

  const responsibility = responsibilities.split(".")
  const requirement = requirements.split(".")
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vhk9vhi",
        "template_6rft3fm",
        form.current,
        "fOy7U-kvC3OfcXk0y", 
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent!!");
        },
        (error) => {
          console.log(error.text);
          alert("Not able to send the message currently!!");
        }
      );
  };
  
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
        <div className={`text-black pt-[8rem] right-[20rem] fixed `}>
          <div className={`select-none fixed right-5 bottom-5 bg-[#000] text-white lg:w-[550px] md:w-[550px] sm:w-[550px] xs:w-[300px] xs:right-3 rounded-md p-5 lg:block md:${toggle?"hidden":"block"} sm:${toggle?"hidden":"block" } xs:${toggle?"hidden":"block"}`} id='form'>
          <div><Image src={close} alt="close" className='md:ml-[30rem] sm:ml-[30rem] xs:ml-[15rem] lg:hidden block' onClick={() => {
                setToggle(!toggle);
                console.log(toggle);
              }}/></div>
          <form className="flex flex-col gap-2 " ref={form}>
          <h2 className="text-lg font-bold uppercase mb-3">Apply for This Role</h2>
          <div className='hidden'>
          <label htmlFor="title"><input type="text" name='from_title' value={title} /></label>
          </div>
          <div className=""><label htmlFor="fullName">
          <input type="text" id="fullName" name="from_name" placeholder="Full name" className="bg-[rgba(255,255,255,0.05)] rounded-sm px-3 py-2 w-full" required />
          <span className="sr-only">Full name</span>
          </label>
          </div>
          <div className="">
          <label htmlFor="phoneNumber">
          <input type="text" id="phoneNumber" name="from_number" placeholder="Phone number" className="bg-[rgba(255,255,255,0.05)] rounded-sm px-3 py-2 w-full" required/>
          <span className="sr-only">Phone number</span>
          </label>
          </div>
          <div className="">
          <label htmlFor="email">
          <input type="text" id="email" name="from_mail" placeholder="Email" className="bg-[rgba(255,255,255,0.05)] rounded-sm px-3 py-2 w-full" required/>
          <span className="sr-only">Email</span>
          </label>
          </div>
          <div className="py-2 flex items-center gap-3">
          <label htmlFor="resume" className="cursor-text shrink-0 pl-3">Resume*</label>
          <div className="flex w-full overflow-hidden space-between items-center">
          <input className="text-xs" type="file" name="from_resume" required/>
          </div>
          </div>
          <div className="">
          <label htmlFor="linkedin">
          <input type="text" id="linkedin" name="from_linkedin" placeholder="LinkedIn (optional)" className="bg-[rgba(255,255,255,0.05)] rounded-sm px-3 py-2 w-full" />
          <span className="sr-only">LinkedIn (optional)</span></label></div>
          <div className="">
          <label htmlFor="portfolio">
          <input type="text" id="portfolio" name="from_portfolio" placeholder="Link to portfolio (optional)" className="bg-[rgba(255,255,255,0.05)] rounded-sm px-3 py-2 w-full" />
          <span className="sr-only">Link to portfolio (optional)</span>
          </label>
          </div>
          <div className="">
          <label htmlFor="other">
          <input type="text" id="other" name="from_other" placeholder="Additional (optional)" className="bg-[rgba(255,255,255,0.05)] rounded-sm px-3 py-2 w-full"/>
          <span className="sr-only">Additional (optional)</span>
          </label>
          </div>
          <button className=" bg-white font-[500] disabled py-4 md:h-12 text-sm md:text-base text-black flex items-center justify-center uppercase md:w-full mt-auto md:mt-6 rounded w-[calc(100%+1rem)] -ml-2 md:ml-0" type="submit" onClick={sendEmail}>Submit Application</button>
          </form>
          </div>
        </div>
        <div className={`lg:hidden left-0 bottom-0 w-full fixed px-2 pb-2 bg-[#000]  md:${!toggle?"hidden":"block"} sm:${!toggle?"hidden":"block" } xs:${!toggle?"hidden":"block"}`}><button className="rounded shadow-xl w-full bg-[#000] px-3 py-4 text-white uppercase font-[500]" onClick={() => {
                setToggle(!toggle);
                console.log(toggle);
              }}>Apply</button></div>
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