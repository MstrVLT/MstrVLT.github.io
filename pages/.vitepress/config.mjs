import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "EZ-Fix Hub",
  description: "A VitePress Site ????",
  base: '/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // siteTitle: false,
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Отзывы', link: '/' },
      { text: 'Контакты', link: '/contacts' },
      { text: 'Благодарности', link: '/' }
    ],

    sidebar: {
      // This sidebar gets displayed when a user
      // is on `guide` directory.
      '/switch/': [
        {
          text: 'Nintendo Switch',
          items: [
            { text: 'Услуги', link: '/guide/' },
            { text: 'Глоссарий', link: '/guide/one' },
            { text: 'Установка игр', link: '/guide/two' },
            { text: 'Резервное копирование сохранений', link: '/guide/one' },
            { text: 'Безопасное обновление прошивки', link: '/guide/one' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `config` directory.
      '/3ds/': [
        {
          text: '3ds Guide',
          items: [
            { text: 'Услуги', link: '/config/' },
            { text: 'Установка игр', link: '/config/three' },
            { text: 'Резервное копирование сохранений', link: '/config/four' },
            { text: 'Безопасное обновление прошивки', link: '/guide/one' }
          ]
        }
      ]
    },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
