
require("./main.css")

const Vue = require("vue");
const VueRouter = require("vue-router");
const VueMaterial = require("vue-material");

Vue.use(VueRouter);
Vue.use(VueMaterial);


window.rootvm = new Vue({
  render: r => r(require("./components/base-router.vue")),
  el: "#app",
});