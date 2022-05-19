<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import { storeToRefs } from 'pinia'
import { useAuthorStore } from '../stores/author'

const { authors } = storeToRefs(useAuthorStore())

console.log( authors.value.length )

const { fetchAuthors } = useAuthorStore()

fetchAuthors()
</script>

<template>
    <div v-if="authors.values.length <= 1"
        class="text-2xl font-bold text-red-600"
        >No data available :(</div>

    <div v-else v-for="author in authors" :key="author.id"
    class="my-2 columns-2">
        <div class="text-right">{{author.name}}</div>
        <div class="text-left">
            <router-link :to="`/author/${author.username}`" 
                class="px-1 h-min flex sm:inline-flex justify-center 
                    items-center bg-gradient-to-tr from-indigo-500
                    to-purple-400 hover:from-indigo-600 hover:to-purple-500 
                    active:from-indigo-700 active:to-purple-600 
                    focus-visible:ring ring-indigo-300 text-white 
                    font-extralight text-center rounded-md outline-none
                    transition duration-100">
                Details
            </router-link>
        </div>
    </div> 
</template>