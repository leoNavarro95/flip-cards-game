<script lang="ts" setup>
  import { useRoute } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { useAuthorStore } from '../stores/author'
  import { usePostStore } from '../stores/post'
  import PostCard from '../components/PostCard.vue'
  import CommentList from '../components/CommentList.vue'
  import { useCommentStore } from '../stores/comment'

  const route = useRoute() 
  const { getPostAuthor } = storeToRefs(useAuthorStore())
  const { fetchAuthors} = useAuthorStore()
  const { post, loading, error } = storeToRefs(usePostStore())
  const { fetchPost } = usePostStore()
  const id: number = Number(route.params.id)

  const { getPostComments } = storeToRefs(useCommentStore())
  const { fetchComments } = useCommentStore()

  fetchAuthors()
  fetchPost(id)
  fetchComments()
</script>

<template>
  <div>
    <p v-if="loading">Loading post...</p>
    <p v-if="error">{{ error.message }}</p>
    <div v-if="post">
      <PostCard :post="post" :author="getPostAuthor" :numComments = "getPostComments.length"></PostCard>
      <div class="p-5">
        <div class="mt-2 mb-0 w-full border-t-2 border-violet-400"></div>
        <h3 class="font-sans font-normal text-2xl text-center bg-violet-100">Comments:</h3>
        <CommentList :comments="getPostComments"></CommentList>
    </div>
    </div>
  </div> 
</template>