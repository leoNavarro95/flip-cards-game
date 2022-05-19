<script setup lang="ts">

import { RouterLink } from 'vue-router'

defineProps(['author', 'posts'])

</script>


<template>
    <h1> Author component</h1>
    <h1> {{ author.name }}</h1>
    
    <p> {{ posts.length }} posts written. </p>
    <div v-for="post in posts" :key="post.id" >
        <div>{{ post.title }}</div>
        <router-link :to="`/post/${post.id}`"> detalles</router-link>
    </div>
</template>