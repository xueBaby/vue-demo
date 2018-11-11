<template>
  <div class="container">
    <Search />
    <UserMain />

  </div>
</template>
<script>
  import Search from './compnonts/Search.vue';
  import Main from './compnonts/Main.vue';
  export default {

    components: {
      Search,
      UserMain: Main
    }
  }
</script>
<style>

</style>
