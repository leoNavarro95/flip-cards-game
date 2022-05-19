<script setup lang="ts">
    import { RouterLink } from 'vue-router'
    defineProps(['loading', 'posts', 'existData'])
</script>

<template>
    <div v-if="!loading" class="m-5 space-y-5 grid grid-cols-1 content-center font-sans text-xl">
        <div v-if="existData" v-for="post in posts" :key="post.id"
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
    </div>
</template>