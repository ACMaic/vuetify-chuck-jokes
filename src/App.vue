<template>
  <v-app id="inspire">
    <v-app-bar flat class="bg-orange-lighten-4" px-11 py-5 >
      <v-container class="mx-auto d-flex align-center justify-center">
        <v-avatar
          class="me-4 "
          color="bg-grey-darken-1"
          size="64"
        >
        <v-img src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png" alt="Chuck-Norris-icon"></v-img>
      </v-avatar>

        <v-btn class="bg-amber-darken-4"
          v-for="link in links"
          :key="link"
          :text="link"
          variant="text"
          :to="`/${link.toLowerCase ()}`"
        ></v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="160">
          <v-text-field
            prepend-icon="mdi-magnify"
            v-model="search"
            density="compact"
            label="Search"
            rounded="lg"
            variant="solo-filled"
            flat
            hide-details
            single-line
            @input="filter"
            clearable


          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="bg-orange-lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list rounded="lg" class="bg-amber-darken-4">
                <v-list-item
                  v-for="(menu, index) in submenus"
                  :key="index"
                  :title="menu.name"
                  link
                  :to="menu.path"
                ></v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet
              color="orange-lighten-4"
              min-height="90vh"
              rounded="lg"
            >
              <router-view></router-view>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>



<script setup>
import { ref } from 'vue'
import { useJokesStore } from '@/store'

const store = useJokesStore()

const search = ref('')
const links = ref([ 'Home' ])
const submenus = ref (
  [
    {
      name: 'Search',
      path: '/home/search'
    },
    {
      name: 'Search 1',
      path: '/search/1?name=maicon'
    },

])

const filter = () => {
  store.filterJokes(search.value)
}

</script>
