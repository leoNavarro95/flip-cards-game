import { defineStore } from 'pinia'
import { usePostStore } from './post'

export interface User{
    id: number,
    name: string,
    username: string,
    email: string
}

export const useAuthorStore = defineStore({
  id: 'author',
  state: () => ({
    authors: [{} as User]
  }),
  getters: {
    getPostAuthor: (state) => {
      const postStore = usePostStore()
      return state.authors.find((author: User) => author.id === postStore.post.userId)
    }
  },
  actions: {
    async fetchAuthors() {
      this.authors = await fetch('https://jsonplaceholder.typicode.com/users')
                            .then((response) => response.json())
    }
  }
})