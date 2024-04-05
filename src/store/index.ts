import { defineStore } from 'pinia'

export const useJokesStore = defineStore('jokes', {
    state: () => ({
      jokes: [
        {
          "categories": [],
          "created_at": "2020-01-05 13:42:25.905626",
          "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
          "id": "rqFAnAqITaiLOLCkWs9c4Q",
          "updated_at": "2020-01-05 13:42:25.905626",
          "url": "https://api.chucknorris.io/jokes/rqFAnAqITaiLOLCkWs9c4Q",
          "value": "Chuck Norris does not have hemorrhoids. That's because when he feels one growing on his asshole, he pinches it off with his steely fingernails and feeds it to Cedric, his pet tarantula."
        }
    ],
    filteredJokes:[]
    }),
  getters: {
    getJokes: (state) => state.jokes,
    getfilteredJokes: (state) => state.filteredJokes,
  },
  actions: {
    addJoke(joke) {
      this.jokes.push(joke)
    },
    removeJoke(id){
      this.jokes = [ ... this.jokes.filter(j => j !== id)]
    },
    filterJokes(term: string){
      const toFilter = [...this.jokes]
      if (term){
      this.filteredJokes = toFilter.filter(j => j.value.includes(term))
    }
  }
},
})
