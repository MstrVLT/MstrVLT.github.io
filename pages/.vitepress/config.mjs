import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "EZ-Fix Hub",
  description: " ",
  base: '/',
  markdown: {
    container: {
      tipLabel: ' ',
      warningLabel: ' ',
      dangerLabel: ' ',
      infoLabel: ' ',
      detailsLabel: ' '
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // siteTitle: false,
    nav: [
      { component: 'EZSocialContactsComponent' },
    ],

    sidebar: {
      // This sidebar gets displayed when a user
      // is on `guide` directory.
      '/switch/': [
        {
          text: 'Nintendo Switch',
          items: [
            { text: 'Услуги - не работает', link: '/guide/' },
            { text: 'Глоссарий', link: '/switch/sw_glossary' },
            { text: 'FAQ', link: '/switch/sw_faq' },
            { text: 'Установка игр', link: '/guide/two' },
            { text: 'Резервное копирование сохранений', link: '/guide/one' },
            { text: 'Безопасное обновление', link: '/guide/one' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `config` directory.
      '/3ds/': [
        {
          text: 'Nintendo 3DS',
          items: [
            { text: 'Услуги', link: '/config/' },
            { text: 'Установка игр', link: '/config/three' },
            { text: 'Резервное копирование сохранений', link: '/config/four' }
          ]
        }
      ],
    
    '/wiiu/': [
        {
          text: 'Nintendo Wii U',
          items: [
            { text: 'Услуги', link: '/guide/' },
            { text: 'FAQ', link: '/guide/one' },
            { text: 'Установка игр', link: '/guide/two' },
            { text: 'Резервное копирование сохранений', link: '/guide/one' }
          ]
        }
      ],

     '/dsi/': [
        {
          text: 'Nintendo DSi',
          items: [
            { text: 'Услуги', link: '/guide/' },
            { text: 'FAQ', link: '/guide/one' },
            { text: 'Установка игр и DSiWare приложений', link: '/guide/two' }
          ]
        }
      ],

      '/vita/': [
        {
          text: 'Playstation Vita/TV',
          items: [
            { text: 'Услуги', link: '/guide/' },
            { text: 'FAQ', link: '/guide/one' },
            { text: 'Полезные ссылки', link: '/guide/two' }
          ]
        }
      ],

      '/psp/': [
        {
          text: 'Playstation Portable',
          items: [
            { text: 'Услуги', link: '/guide/' },
            { text: 'FAQ', link: '/guide/one' },
            { text: 'Полезные ссылки', link: '/guide/two' }
          ]
        }
      ],

      '/steam deck/': [
        {
          text: 'Steam Deck',
          items: [
            { text: 'Услуги', link: '/guide/' },
            { text: 'FAQ', link: '/guide/one' }
           ]
        }
      ],

      '/g&w/': [
        {
          text: 'Game and Watch (2021)',
          items: [
            { text: 'Услуги', link: '/guide/' },
            { text: 'FAQ', link: '/guide/one' },
            { text: 'Полезные ссылки', link: '/guide/two' }
          ]
        }
      ],

      '/gamepads/': [
        {
          text: 'Геймпады',
          items: [
            { text: 'Услуги', link: '/guide/' },
            { text: 'FAQ', link: '/guide/one' },
            { text: 'Полезные ссылки', link: '/guide/two' }
          ]
        }
      ],
    }
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
