<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { RouterLink ,RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />

  <h1 class="text-3xl font-bold text-blue-600"> Router view abajo</h1>
  
  <div class="m-5 p-3 flex flex-grap gap-4 justify-center">
    <router-link class="hover:text-green-500" to="/">Home</router-link>
    <router-link class="hover:text-green-500" to="/about">About</router-link>
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
