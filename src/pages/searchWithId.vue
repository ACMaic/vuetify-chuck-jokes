<template>
  <div>
    <h1>Searched id: {{ id }}</h1>
    <v-btn @click="back" > Back to home </v-btn>
  </div>
</template>

  <script>
  export default {
    data: () => ({
      id: ''
    }),
    beforeMount() {
        console.log(this.$route)
        this.id = this.$route.params.id
    },
    methods:{
      back(){
        this.$router.replace('/home')
    }
    }
  }
  </script>
