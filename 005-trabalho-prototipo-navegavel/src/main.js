
require("./main.css")

const Vue = require("vue")
const VueRouter = require("vue-router")
const VueMaterial = require("vue-material")

Vue.use(VueRouter)
Vue.use(VueMaterial)

// ver documentação aqui: http://vuematerial.io/#/
Vue.material.registerTheme('default', {
  primary: "amber",
  accent: 'lime',
  warn: 'red',
  background: 'white'
})


Vue.component("navbar", require("./components/navbar.vue"))

window.rootvm = new Vue({
  render: r => r(require("./components/base-router.vue")),
  el: "#app",
})