<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { RouterLink ,RouterView } from 'vue-router';

</script>

<template>
  
  <div class="m-5 p-3 flex flex-grap gap-4 justify-center">
    <router-link class="hover:text-green-500" to="/">Posts</router-link>
    <router-link class="hover:text-green-500" to="/Authors">Authors</router-link>
    <router-link class="hover:text-green-500" to="/tests">Tailwind Tests</router-link>
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
