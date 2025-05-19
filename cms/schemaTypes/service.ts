export default {
    name: 'serviceCard',
    title: 'Karta služby',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Názov',
        type: 'string'
      },
      {
        name: 'price',
        title: 'Cena',
        type: 'string'
      },
      {
        name: 'features',
        title: 'Výhody',
        type: 'array',
        of: [{ type: 'string' }]
      },
      {
        name: 'image',
        title: 'Fotka',
        type: 'image',
        options: { hotspot: true }
      },
      {
        name: 'label',
        title: 'Top Label (optional)',
        type: 'string'
      },
      {
        name: 'icon',
        title: 'Ikona (z lucid-react knižnice)',
        type: 'string'
      },
    ]
  } 