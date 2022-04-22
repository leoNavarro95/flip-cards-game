<script setup lang="ts">
import { ref } from 'vue'
import useStore from '../store'

defineProps<{ msg: string }>()

const count = ref(0)
const store = useStore()

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="m-5 p-5 max-w flex flex-grap gap-4 justify-center bg-slate-500">
    <button class="border-black rounded-lg" @click="count++">count is: {{ count }}</button>
    <button @click="store.counter++"
      class="relative overflow-hidden rounded-md group px-8 h-14 bg-red-500
                      before:absolute 
                      before:inset-0 
                      before:bg-red-700 
                      before:scale-x-0 
                      before:origin-right
                      before:transition
                      before:duration-300
                      hover:before:scale-x-100
                      hover:before:origin-left
                      ">
          <span class="relative uppercase text-base text-white">pinia count is: {{ store.counter }}</span>
        </button>
        <button @click="store.counter++"
          class="relative group overflow-hidden px-8 h-12 rounded-md bg-lime-500
                      before:absolute 
                      before:inset-0 
                      before:bg-lime-600 
                      before:scale-y-[0.1] 
                      before:origin-bottom
                      before:transition
                      before:duration-300
                      hover:before:scale-y-100
                      ">
          <span class="relative text-base text-white">pinia count: {{ store.counter }}</span>
        </button>
  </div>

</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
