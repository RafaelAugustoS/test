import Vue from 'vue'
import App from './App'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  ja: {
    message: {
      hello: 'こんにちは、世界'
    }
  },
  pt: {
  	message: {
  		hello: 'Olá Mundo'
  	}
  }
}

const i18n = new VueI18n({
  locale: 'pt',
  messages,
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
