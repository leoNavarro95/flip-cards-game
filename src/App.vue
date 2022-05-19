<script setup lang="ts">

import { RouterLink ,RouterView, useRoute } from 'vue-router';

const route = useRoute()

console.log( route.path );


</script>

<template>
  
  <div class="m-5 p-3 flex flex-grap gap-4 justify-center">
    <router-link class="hover:text-green-500" to="/">Posts</router-link>
    <router-link class="hover:text-green-500" to="/authors">Authors</router-link>
    <router-link class="hover:text-green-500" to="/tests">Tailwind Tests</router-link>
  </div>

  <div class=" mx-5 p-3 rounded-b-lg bg-violet-500 text-5xl font-sans font-extralight">
        {{ route.name }}
    </div>

  <router-view></router-view>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
