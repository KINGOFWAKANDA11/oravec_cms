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
      name: 'rotatingTexts',
      title: 'Rotujúce texty',
      type: 'array',
      of: [{ type: 'string' }]
    }
  ],
}