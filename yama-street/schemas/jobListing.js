export default {
    name: 'jobListing',
    title: 'Job Listings',
    type: 'document',
    fields: [
        {
            name: 'jobId',
            title: 'Job ID',
            type: 'string',
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Job Description',
            type: 'string',
        },
        {
            name: 'responsibilities',
            title: 'Responsibilities',
            type: 'string',
        },
        {
            name: 'requirements',
            title: 'Requirements',
            type: 'string',
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
        },
        {
            name: 'salary',
            title: 'Salary',
            type: 'string',
        },
        {
            name: 'type',
            title: 'Type',
            type: 'string',
        },
        {
            name: 'expiresAt',
            title: 'Expires on',
            type: 'datetime',
        },
        {
            name: 'postedAt',
            title: 'Posted on',
            type: 'datetime',
        },
    ],
  };