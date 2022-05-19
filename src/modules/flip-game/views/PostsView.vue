<script lang = 'ts' setup>
  import { ref, onMounted } from 'vue';
  import { RouterLink } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { usePostStore } from '../stores/post'

// We can’t use destructuring for state properties and getters because they will lose
// their reactivity. To solve this, Pinia provides the storeToRefs utility, which creates
// a ref for each property. 
  const { posts, loading, error } = storeToRefs(usePostStore())

// actions can be destructured without any problem  
  const { fetchPosts } = usePostStore()


  let existData = ref(false)

  const fetchData = async () => {
    await fetchPosts()
    existData.value = (posts.value.length > 1)
  }

  onMounted(() => {
    fetchData()
  })

// When using Composition API and call a function inside the setup() function, it’s
// equivalent to using the created() Hook. So, we’ll have the posts before the component mounts.
  // fetchPosts()
</script>

<template>
  <main>
      
    <div v-if="loading" class="text-2xl font-bold text-gray-700">Loading posts...</div> 
    <div v-if="error" class="text-2xl font-bold text-red-600">{{ error.message }}</div>
    
    <!-- Lista -->
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
  </main>
</template>