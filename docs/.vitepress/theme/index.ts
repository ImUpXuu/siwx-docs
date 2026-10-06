import DefaultTheme from 'vitepress/theme'
import LandingHero from './components/LandingHero.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('LandingHero', LandingHero)
  },
}
