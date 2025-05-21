export default {
  name: 'hero',
  title: 'Domov',
  type: 'document',
  fields: [
    {
      name: "titleImage",
      type: "image",
      title: "Fotka"
    },
    {
      name: 'title',
      title: 'Hlavný nadpis',
      type: 'string'
    },
    {
      name: 'subtitle',
      title: 'Podnadpis',
      type: 'string'
    },
    {
      name: 'rotatingTexts',
      title: 'Rotujúce texty',
      type: 'array',
      of: [{ type: 'string' }]
    }
  ],
}