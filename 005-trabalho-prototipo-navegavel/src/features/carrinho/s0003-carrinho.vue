<template>
  <div>
    <navbar titulo="Meu carrinho"></navbar>
    <md-layout md-gutter md-column>
      <resumo-oferta></resumo-oferta>
      <resumo-oferta></resumo-oferta>
      <p>
        Total: R$ 22,00
      </p>
      <md-button class="md-raised md-primary md-accent">
        <md-icon>location_on</md-icon>
        Escolher endereço de entrega
      </md-button>
    </md-layout>
  </div>
</template>

<script>
module.exports = {
  name: "Carrinho"
};
</script>

<style>

</style>
