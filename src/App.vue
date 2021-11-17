<template>
  <div id="app">
    <!-- Search Bar and Button !-->
    <input type="text" v-model="movieToSearch" /><button @click="searchMovie">
      Cerca
    </button>

    <!-- Movie List !-->
    <ul v-for="movie in currentMovies" :key="movie.id">
      <li>Titolo: {{ movie.title }}</li>
      <li>Titolo originale: {{ movie.original_title }}</li>
      <li>Lingua: {{ movie.original_language }}</li>
      <li>Voto: {{ movie.vote_average }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      apiKey: "031b25f0ecd29749a18d82fd3135886f",
      currentMovies: [],
      movieToSearch: "",
    };
  },
  methods: {
    searchMovie() {
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: this.apiKey,
            query: this.movieToSearch,
          },
        })
        .then((response) => {
          this.currentMovies = response.data.results;
        });
    },
  },
};
</script>

<style lang="scss">
</style>
