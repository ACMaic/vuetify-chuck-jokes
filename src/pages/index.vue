<template>
  <div class="text-center pa-4">
     <h1>Jokes</h1>
     <v-progress-linear v-if="isLoading" color="" indeterminate></v-progress-linear>
     <v-btn color="amber-darken-4" @click="addJoke" prepend-icon="mdi-karate" append-icon="mdi-karate">
      Add jokes
     </v-btn>
     <v-card v-for="(j, index) in store.jokes" :key="index" color="amber-darken-4" style="margin: 10px 0">
        <v-list-item>{{ j.value }}
          <v-list-item-avatar size="10">
            <img :src="ChuckNorrisMinionGif" alt="Chuck Norris Minion">
          </v-list-item-avatar>
        </v-list-item>
      </v-card>
     <router-view></router-view>
  </div>
</template>

<script setup>
import axios from 'axios'
import { useJokesStore } from '@/store'
import { ref } from 'vue'
import ChuckNorrisMinionGif from '@/assets/chuck-norris-minion.gif';

const isLoading = ref(false)
const store = useJokesStore()

const addJoke = () => {
    isLoading.value = true
    axios.get('https://api.chucknorris.io/jokes/random').then((res) => {
        store.addJoke(res.data)
        isLoading.value = false
    })
}
</script>
