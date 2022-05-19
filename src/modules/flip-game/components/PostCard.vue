<script lang="ts" setup>
  import { RouterLink } from 'vue-router'
  import { firstLetterUpperCase } from '../helpers/strings'
  

  defineProps(['post', 'author', 'numComments'])
// using Object syntax
// const props = defineProps({
//   post: {type: string},
//   author: {type: string},
//   numComments as number,
// })
  
</script>

<template>
    <div class="m-5 pt-6 px-6 pb-0 bg-violet-300 rounded-lg border border-gray-200 shadow-md">
        <h2 class="font-sans font-normal text-2xl text-left">
            "{{ firstLetterUpperCase(post.title) }}"
        </h2>
        
        <div class="my-2 w-full border-t-2 border-gray-300"></div>
        <p class="font-sans font-medium text-sm text-justify">{{ firstLetterUpperCase(post.body) }}</p>
        
        <p class="text-right" v-if="author">Written by: 
        <RouterLink class="hover:text-blue-800 font-bold underline" :to="`/author/${author.username}`">
            {{ author.name }}
        </RouterLink>
            <span> | Comments: {{ numComments }}</span>
        </p>
    </div>
    
</template>