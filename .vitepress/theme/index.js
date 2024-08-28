// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import EZLayout from './EZLayout.vue'
import './style.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: EZLayout,
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
