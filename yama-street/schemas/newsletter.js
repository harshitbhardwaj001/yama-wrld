export default {
    name: 'newsletterSubscription',
    title: 'Newsletter Subscription',
    type: 'document',
    fields: [
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: (Rule) => Rule.required().email(),
      },
      {
        name: 'timestamp',
        title: 'Timestamp',
        type: 'datetime',
        options: {
          dateFormat: 'YYYY-MM-DD HH:mm:ss',
          timeFormat: 'HH:mm:ss',
        },
      },
    ],
  };