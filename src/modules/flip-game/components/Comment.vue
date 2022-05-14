<script lang="ts" setup>
  defineProps(['comments'])
</script>

<template>
  <div class="md:m-5 mt-5 space-y-5 grid grid-cols-1 content-center font-sans text-xl">
    <div v-for="comment in comments" :key="comment.id"
        class="p-6 max-w-max rounded-t-full border border-gray-200 shadow-md" 
        :class="(comment.id % 2 == 0) ? 
                ['bg-violet-300', 'rounded-br-full', 'text-left'] : 
                ['bg-violet-200', 'rounded-bl-full', 'text-right']"
    >
      <h3>{{ comment.name }}</h3>
      <p>{{ comment.body }}</p>
    </div>
  </div>
</template>