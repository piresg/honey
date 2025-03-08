import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "{in)secure",
  lang: 'en-US',
  description: "Documentation",
  
    lastUpdated: true,
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    

    nav: [
      { text: 'Home', link: '/' },
      /*     { text: 'SASE', link: '/sase/sase' },
           { text: 'PAN-OS', link: '/panos/panos' },
           { text: 'Cortex Cloud', link: '/cortex' } */
    ],
    search: {
      provider: "local",
    },
 

    sidebar: {
      '/sase/': [
        {
          text: 'SASE',
          items: [
            { text: 'Cloud Identity Engine', link: '/sase/cie' },
            { text: 'Global Protect', link: '/sase/cie' },
            { text: 'Prisma Access Browser', link: '/sase/cie' },

          ]

        }
      ],
      '/panos/': [
        {
          text: 'PAN-OS',
          items: [
            { text: 'User-ID Integrated Agent', link: '/panos/userid' },
            { text: 'Global Protect with EntraID', link: '/panos/gpentraid' },


          ]

        }
      ]
    },

    footer: {
      message: 'Please always use offical documentation, this is a community page.',
      copyright: 'Copyleft © 2025'
    }
  },




}

)



