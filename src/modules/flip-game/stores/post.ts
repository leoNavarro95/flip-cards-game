import { defineStore } from 'pinia'

interface Post{
    userId: number;
    id: number;
    title: string;
    body: string;
}


export const usePostStore = defineStore({
  id: 'post',
  state: () => ({
    posts: [],
    post: null,
    loading: false,
    error: null
  }),
  getters: {
    getPostsPerAuthor: (state) => {
      return (authorId: number) => state.posts.filter((post: Post) => post.userId === authorId)
    }
  }, 
  actions: {
    async fetchPosts() {
      this.posts = []
      this.loading = true
      try {
        this.posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json()) 
      } catch (error: any) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async fetchPost(id: number) {
      this.post = null
      this.loading = true
      try {
        this.post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
      } catch (error: any) {
        this.error = error
      } finally {
        this.loading = false
      }
    }
  }
})



function isBigEnough(element: number, index: number) { 
    return (element >= 10); 
 } 
           
 var passed = [12, 5, 8, 130, 44].filter(isBigEnough); 
 console.log("Test Value : " + passed );