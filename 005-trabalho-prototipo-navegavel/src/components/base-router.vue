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
    { path: "/s0002-detalhe-oferta", component: require("../features/ofertas/s0002-detalhe-oferta.vue") },
    { path: "/s0003-carrinho", component: require("../features/carrinho/s0003-carrinho.vue") },
    { path: "/s0004-lista-pedidos", component: require("../features/pedidos/s0004-lista-pedidos.vue") },
    { path: "/s0005-detalhe-pedido", component: require("../features/pedidos/s0005-detalhe-pedido.vue") },
    { path: "/s0006-lista-usuarios", component: require("../features/perfis/s0006-lista-usuarios.vue") },
    { path: "/s0007-detalhe-usuario", component: require("../features/perfis/s0007-detalhe-usuario.vue") },
    { path: "/s0008-lista-enderecos", component: require("../features/perfis/endereco/s0008-lista-enderecos.vue") },
    { path: "/s0009-detalhe-endereco", component: require("../features/perfis/endereco/s0009-detalhe-endereco.vue") },
    { path: "/s0010-lista-formas-pagamento", component: require("../features/perfis/formas-de-pagamento/s0010-lista-formas-pagamento.vue") },
    { path: "/s0011-detalhe-forma-pagamento", component: require("../features/perfis/formas-de-pagamento/s0011-detalhe-forma-pagamento.vue") },
  ]
})

module.exports = {
  name:"BaseRouter",
  router
}
</script>