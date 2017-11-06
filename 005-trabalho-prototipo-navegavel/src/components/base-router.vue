<template>
  <div>
    <router-view></router-view>  
  </div>
</template>
<script>
const VueRouter = require("vue-router");
const router = new VueRouter({
  routes: [
    { path: "/", redirect: "/s0001-lista-ofertas" },
    { path: "/s0001-lista-ofertas", component: require("../features/ofertas/s0001-lista-ofertas.vue") },
  ]
})

module.exports = {
  name:"BaseRouter",
  router
}
</script>