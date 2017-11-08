<template>
  <div>
    <div class="shadow"></div>
    <md-toolbar class="fix">
      <h2 class="md-title" style="flex: 1">{{titulo}}</h2>
      <md-menu md-direction="bottom left" md-size="4" style="z-index:100">
        <md-button class="md-icon-button" md-menu-trigger>
          <md-icon>menu</md-icon>
        </md-button>
        <md-menu-content>
          <md-menu-item href="#/s0001-lista-ofertas">
            <md-icon>star</md-icon>
            <span>Ofertas</span>
          </md-menu-item>
          <md-menu-item href="#/s0003-carrinho">
            <md-icon>shopping_cart</md-icon>
            <span>Meu carrinho</span>
          </md-menu-item>
          <md-menu-item href="#/s0004-lista-pedidos">
            <md-icon>hourglass_full</md-icon>
            <span>Últimos pedidos</span>
          </md-menu-item>
          <md-menu-item href="#/s0006-lista-usuarios">
            <md-icon>face</md-icon>
            <span>Perfil</span>
          </md-menu-item>
        </md-menu-content>
      </md-menu>
    </md-toolbar>
  </div>
</template>

<script>
module.exports = {
  name: "Navbar",
  props: ["titulo"]
};
</script>

<style scoped>
  .fix{
    position:fixed;
    z-index:99;
    width:100%;
    top:0px;
    left:0px;
  }
  .shadow{
    width:100%;
    height:60px;
  }
</style>
