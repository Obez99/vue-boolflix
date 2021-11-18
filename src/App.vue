<template>
  <div id="app">
    <!-- Search Bar and Button !-->
    <input type="text" v-model="itemToSearch" /><button @click="searchItems">
      Cerca
    </button>

    <!-- Movie List !-->
    <h2>FILM</h2>
    <Card v-for="movie in currentMovies" :key="movie.id" :cardData="movie">
    </Card>
    <h2>SERIE</h2>
    <Card
      v-for="series in currentSeries"
      :key="series.id"
      :cardData="series"
    ></Card>
  </div>
</template>

<script>
import axios from "axios";
import Card from "./components/Card.vue";
export default {
  name: "App",
  components: { Card },
  data() {
    return {
      apiUrl: "https://api.themoviedb.org/3",
      apiKey: "031b25f0ecd29749a18d82fd3135886f",
      currentMovies: [],
      currentSeries: [],
      itemToSearch: "",
    };
  },
  methods: {
    apiSearch(itemType, returnType) {
      axios
        .get(this.apiUrl + "/search/" + itemType, {
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
