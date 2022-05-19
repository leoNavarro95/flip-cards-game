<script setup lang="ts">

import { RouterLink } from 'vue-router'
import { firstLetterUpperCase } from '../helpers/strings'
import PostList from '../components/PostList.vue'

defineProps(['author', 'posts'])

</script>


<template>
     <div class="m-5 pt-6 px-6 pb-0 bg-violet-300 rounded-lg border border-gray-200 shadow-md">
        <h2 class="font-sans font-normal text-2xl text-left">
            {{ firstLetterUpperCase(author.name) }}
        </h2>
        
        <div class="my-2 w-full border-t-2 border-gray-300"></div>
        
        <p class="text-right"> <span>Written posts: {{ posts.length }}</span></p>
    </div>


    <div v-if="posts" v-for="post in posts" :key="post.id"
            class="p-6 max-w-max rounded-lg border border-gray-200 shadow-md" 
            :class="(post.id % 2 == 0) ? 'bg-violet-300' : 'bg-violet-400'"
        >
            <div class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                <RouterLink :to="`/post/${post.id}`"
                    class="hover:text-blue-800 font-bold underline"
                >   {{ post.title }}
                </RouterLink>
            </div>

            <p class="font-light" >{{ post.body }}</p>
        </div>
</template>