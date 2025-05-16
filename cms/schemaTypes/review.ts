export default {
  name: 'review',
  type: 'document',
  title: 'Referencie',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Meno klienta',
    },
    {
      name: 'position',
      type: 'string',
      title: 'Pozícia / miesto / funkcia'
    },
    {
      name: 'testimonial',
      type: 'text',
      title: 'Testimoniál',
      rows: 4,
    }
  ]
}