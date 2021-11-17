<template>
  <div id="app">
    <!-- Search Bar and Button !-->
    <input type="text" v-model="itemToSearch" /><button @click="searchItems">
      Cerca
    </button>

    <!-- Movie List !-->
    <h2>FILM</h2>
    <ul v-for="movie in currentMovies" :key="movie.id">
      <li>Titolo: {{ movie.title }}</li>
      <li>Titolo originale: {{ movie.original_title }}</li>
      <li>
        Lingua:
        <span
          :class="
            movie.original_language
              ? `flag-icon flag-icon-${movie.original_language}`
              : `flag-icon flag-icon-xx`
          "
        ></span
        >{{ movie.original_language }}
      </li>
      <li>Voto: {{ movie.vote_average }}</li>
      <li>
        <img :src="imageUrl + movie.poster_path" :alt="movie.original_title" />
      </li>
    </ul>
    <h2>SERIE</h2>
    <ul v-for="series in currentSeries" :key="series.id">
      <li>Titolo: {{ series.name }}</li>
      <li>Titolo originale: {{ series.original_name }}</li>
      <li>
        Lingua:
        <span
          :class="
            series.original_language
              ? `flag-icon flag-icon-${series.original_language}`
              : `flag-icon flag-icon-xx`
          "
        ></span
        >{{ series.original_language }}
      </li>
      <li>Voto: {{ series.vote_average }}</li>
      <li>
        <img :src="imageUrl + series.poster_path" :alt="series.original_name" />
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      apiUrl: "https://api.themoviedb.org/3/search/",
      apiKey: "031b25f0ecd29749a18d82fd3135886f",
      currentMovies: [],
      currentSeries: [],
      itemToSearch: "",
      imageUrl: "https://image.tmdb.org/t/p/w342/",
    };
  },
  methods: {
    apiSearch(itemType, returnType) {
      axios
        .get(this.apiUrl + itemType, {
          params: {
            api_key: this.apiKey,
            query: this.itemToSearch,
          },
        })
        .then((response) => {
          this[returnType] = response.data.results;
        });
    },

    searchItems() {
      this.apiSearch("movie", "currentMovies");
      this.apiSearch("tv", "currentSeries");
    },
  },
};
</script>

<style lang="scss">
</style>
