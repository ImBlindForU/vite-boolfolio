<script>

  import AppHeader from './components/AppHeader.vue';
 


  export default{
    name:'App',
    components: {
      AppHeader
    }
  }
</script>

<template>

  <header>
    <AppHeader />
  </header>

   <router-view></router-view>
  
</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
