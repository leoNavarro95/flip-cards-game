<script lang = 'ts' setup>
  import { ref, onMounted } from 'vue';
  import { storeToRefs } from 'pinia'
  import { usePostStore } from '../stores/post'
  import PostList from '../components/PostList.vue'

  const { posts, loading, error } = storeToRefs(usePostStore())
 
  const { fetchPosts } = usePostStore()


  let existData = ref(false)

  const fetchData = async () => {
    await fetchPosts()
    existData.value = (posts.value.length > 1)
  }

  onMounted(() => {
    fetchData()
  })

</script>

<template>
  <main>
      
    <div v-if="loading" class="text-2xl font-bold text-gray-700">Loading posts...</div> 
    <div v-if="error" class="text-2xl font-bold text-red-600">{{ error.message }}</div>

    <PostList :loading="loading" :posts="posts" :existData="existData" />
  </main>
</template>