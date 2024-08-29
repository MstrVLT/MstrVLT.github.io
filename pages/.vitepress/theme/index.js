// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import EZLayout from './EZLayout.vue'
import EZSocialContactsComponent from './components/EZSocialContactsComponent.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTelegram, faVk } from '@fortawesome/free-brands-svg-icons'

import './style.css'

library.add(
  faTelegram,
  faVk
)

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: EZLayout,
  enhanceApp({ app, router, siteData }) {
    app.component('font-awesome-icon', FontAwesomeIcon)
    app.component('EZSocialContactsComponent', EZSocialContactsComponent)
  }
}
