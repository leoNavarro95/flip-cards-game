import { defineStore } from 'pinia'
import { usePostStore } from './post'

interface Comment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

export const useCommentStore = defineStore({
  id: 'comment',
  state: () => ({
    comments: [{} as Comment] 
  }),
  getters: {
    getPostComments: (state) => {
      const postStore = usePostStore()
      return state.comments.filter((comment: Comment) => comment.postId === postStore.post.id)
    }
  },
  actions: {
    async fetchComments() {
      this.comments = await fetch('https://jsonplaceholder.typicode.com/comments')
                            .then((response) => response.json())
    }
  }
})