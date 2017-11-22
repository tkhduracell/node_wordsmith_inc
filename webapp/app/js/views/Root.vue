<template>
  <section class="section">
    <div class="container" id="app">
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    padding: 50px;
    font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;
  }
</style>