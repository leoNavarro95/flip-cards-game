import { defineStore } from 'pinia'

interface Post{
    userId: number;
    id: number;
    title: string;
    body: string;
}


export const usePostStore = defineStore({
  // store unique id for vue devtools on browser
  id: 'post',
  
  // state definition: 
  // posts:   for holding the fetched posts
  // post:    for holding the current post
  // loading: for holding the loading state
  // error:   for holding the error, if such exists
  state: () => ({
    posts: [{} as Post],
    post: {} as Post,
    loading: false,
    error: {} as any
  }),

  getters: {
    // the posts a given author has written
    getPostsPerAuthor: (state) => {
      return (authorId: number) => state.posts.filter((post: Post) => post.userId === authorId)
    }
  }, 
  // actions can be asynchronous
  actions: {  

    // fetch all posts
    async fetchPosts() {     
      this.posts = [{} as Post]     // reset posts array
      this.loading = true  // loading - we are fetching data

      try {
        this.posts = await fetch('https://jsonplaceholder.typicode.com/posts')
                            .then((response) => response.json()) 
      } catch (error: any) {
        this.error = error
      } finally {
        this.loading = false  //set back loading to false - we get data
      }
    },
    
    //fetch post by id
    async fetchPost(id: number) {

      this.post = {} as Post      // reset current post
      this.loading = true   // loading - we are fetching 
      
      try {
        this.post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                          .then((response) => response.json())
      } catch (error: any) {
        this.error = error
      } finally {
        this.loading = false  //set back loading to false - we get data
      }
    }
  }
})



function isBigEnough(element: number, index: number) { 
    return (element >= 10); 
 } 
           
 var passed = [12, 5, 8, 130, 44].filter(isBigEnough); 
 console.log("Test Value : " + passed );