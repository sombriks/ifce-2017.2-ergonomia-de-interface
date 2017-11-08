
require("./main.css")

const Vue = require("vue")
const VueRouter = require("vue-router")
const VueMaterial = require("vue-material")

Vue.use(VueRouter)
Vue.use(VueMaterial)

// ver documentação aqui: http://vuematerial.io/#/
// ícones aqui: https://material.io/icons/#ic_shopping_cart
Vue.material.registerTheme('default', {
  primary: "amber",
  accent: 'lime',
  warn: 'red',
  background: 'white'
})


Vue.component("navbar", require("./components/navbar.vue"))
Vue.component("resumo-oferta", require("./components/resumo-oferta.vue"))
Vue.component("detalhe-oferta", require("./components/detalhe-oferta.vue"))


window.rootvm = new Vue({
  render: r => r(require("./components/base-router.vue")),
  el: "#app",
})