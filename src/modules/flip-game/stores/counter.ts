import { defineStore } from 'pinia'

const useCounter = defineStore('storeId', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      value: 0,
      name: 'Eduardo',
      isAdmin: true,
    }
  },
})

export default useCounter