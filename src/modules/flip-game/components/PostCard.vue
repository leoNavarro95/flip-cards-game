<script lang="ts" setup>
  import { RouterLink } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { useCommentStore } from '../stores/comment'
  import Comment from './Comment.vue'

  defineProps(['post', 'author'])

  const { getPostComments } = storeToRefs(useCommentStore())
  const { fetchComments } = useCommentStore()

  const firstLetterUpperCase = (str: string) => `${str?.charAt(0).toUpperCase()}${str?.substring(1)}` 

  fetchComments()
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
            <span> | Comments: {{ getPostComments.length }}</span>
        </p>
    </div>
    
    <div class="p-5">
        <div class="mt-2 mb-0 w-full border-t-2 border-violet-400"></div>
        <h3 class="font-sans font-normal text-2xl text-center bg-violet-100">Comments:</h3>
        <comment :comments="getPostComments"></comment>
    </div>
</template>