<template>
  <div>
    <navbar titulo="Detalhe da oferta"></navbar>
    <md-layout md-gutter md-column>
      <detalhe-oferta></detalhe-oferta>
      <md-button class="md-raised md-primary md-accent" href="#/s0003-carrinho">
        <md-icon>shopping_cart</md-icon>
        Adicionar ao carrinho
      </md-button>
    </md-layout>
  </div>
</template>

<script>
module.exports = {
  name:"S0002DetalheOferta"
}
</script>

<style>

</style>
