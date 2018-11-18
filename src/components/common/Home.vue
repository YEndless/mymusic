<template>
  <div>
    <v-head></v-head>
    <div class="container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import vHead from './Header';
    export default {
        name: "Home",
      components:{
          vHead
      },
    }
</script>

<style scoped>

</style>
