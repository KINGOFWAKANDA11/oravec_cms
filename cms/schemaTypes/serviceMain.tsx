export default {
    name: 'servicesSection',
    type: 'document',
    title: 'Služby - Sekcia',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Hlavný nadpis sekcie',
      },
      {
        name: 'description',
        type: 'text',
        title: 'Úvodný popis sekcie',
      },
      {
        name: 'mainService',
        type: 'object',
        title: 'Hlavná služba',
        fields: [
          {
            name: 'image',
            type: 'image',
            title: 'Obrázok pozadia (napr. dvere)',
            options: {
              hotspot: true,
            },
          },
          {
            name: 'heading',
            type: 'string',
            title: 'Nadpis hlavnej služby',
          },
          {
            name: 'subheading',
            type: 'string',
            title: 'Podnadpis / Slogan',
          },
          {
            name: 'text',
            type: 'array',
            title: 'Popis služby',
            of: [{ type: 'block' }],
          },
          {
            name: 'features',
            type: 'array',
            title: 'Funkcie / Výhody',
            of: [
              {
                type: 'object',
                fields: [
                  {
                    name: 'title',
                    type: 'string',
                    title: 'Názov',
                  },
                  {
                    name: 'description',
                    type: 'string',
                    title: 'Popis',
                  },
                ],
                preview: {
                  select: {
                    title: 'title',
                  },
                },
              },
            ],
          },
        ],
      },
      {
        name: 'levelsTitle',
        type: 'string',
        title: 'Nadpis sekcie s úrovňami spolupráce',
      },
      {
        name: 'collaborationLevels',
        type: 'array',
        title: 'Úrovne spolupráce',
        of: [
          {
            type: 'object',
            title: 'Úroveň spolupráce',
            fields: [
              {
                name: 'title',
                type: 'string',
                title: 'Názov úrovne',
              },
              {
                name: 'quote',
                type: 'string',
                title: 'Citát alebo slogan',
              },
              {
                name: 'description',
                type: 'array',
                title: 'Popis',
                of: [{ type: 'block' }],
              },
              {
                name: 'label',
                type: 'string',
                title: 'Tlačidlo (napr. "Zadarmo")',
              },
            ],
          },
        ],
      },
    ],
  }