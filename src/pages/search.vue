<template>
  <div class="text-center pa-4">
    <v-divider/>
    <h1>
      Search
    </h1>
    <v-card v-for="(j, index) in store.filteredJokes"
    :key="index"
    color="amber-darken-4"
    style="margin: 10px 0"
    >
    <v-list-item>{{ j.value }}
     <v-list-item-avatar size="10">
      <img :src="ChuckNorrisMinionGif" alt="Chuck Norris Minion">
       </v-list-item-avatar>
   </v-list-item>
    </v-card>
  </div>

</template>

<script setup>
import { useJokesStore } from '@/store'
import ChuckNorrisMinionGif from '@/assets/chuck-norris-minion.gif';

const store = useJokesStore()

</script>
