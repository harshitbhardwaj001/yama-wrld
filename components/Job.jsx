import React from "react";
import Link from "next/link";
import '../styles/globals.css'

import { urlFor } from "../lib/client";

const Job = ({ product: { jobId, title, location, type} }) => {
  return (
    <div>
      <Link href={`/apply/${jobId}`}>
        <div className="flex flex-row product-card job-image">
          <div className="flex flex-col">
          <p className="job-name">{title}</p>
          <p className="job-desc">{location} {'//'} {type}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Job;
