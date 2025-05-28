export default {
    name: 'about',
    title: 'O mne',
    type: 'document',
    fields: [
      {
        name: 'heading',
        title: 'Nadpis',
        type: 'string',
      },
      {
        name: 'text',
        type: 'array',
        title: 'Text',
        of: [{ type: 'block' }],
      },
      {
        name: 'info1',
        title: 'Roky',
        type: 'string',
      },
      {
        name: 'info2',
        title: 'Plocha',
        type: 'string',
      },
      {
        name: 'info3',
        title: 'Hodnota',
        type: 'string',
      },
      {
        name: 'info4',
        title: 'Vlastníci',
        type: 'string',
      },
    ],
  }