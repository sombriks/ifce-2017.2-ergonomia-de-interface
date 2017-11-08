<template>
  <div>
    <navbar titulo="Lista de Ofertas"></navbar>
    <md-layout md-column>
      <resumo-oferta @click.native="nav('#/s0002-detalhe-oferta')"></resumo-oferta>
      <resumo-oferta @click.native="nav('#/s0002-detalhe-oferta')"></resumo-oferta>
      <resumo-oferta @click.native="nav('#/s0002-detalhe-oferta')"></resumo-oferta>
      <resumo-oferta @click.native="nav('#/s0002-detalhe-oferta')"></resumo-oferta>
      <resumo-oferta @click.native="nav('#/s0002-detalhe-oferta')"></resumo-oferta>
      <resumo-oferta @click.native="nav('#/s0002-detalhe-oferta')"></resumo-oferta>
    </md-layout>
  </div>
</template>

<script>
module.exports = {
  name: "S0001ListaOfertas",
  methods: {
    nav(path) {
      window.location.href = path;
    }
  }
};
</script>

<style>

</style>
