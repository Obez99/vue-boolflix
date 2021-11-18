<template>
  <div id="app">
    <Header @search="searchItems"></Header>

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
import Header from "./components/Header.vue";
import Card from "./components/Card.vue";
export default {
  name: "App",
  components: { Header, Card },
  data() {
    return {
      apiUrl: "https://api.themoviedb.org/3",
      apiKey: "031b25f0ecd29749a18d82fd3135886f",
      itemToSearch: "",
      currentMovies: [],
      currentSeries: [],
    };
  },
  methods: {
    searchItems(str) {
      this.itemToSearch = str;
      this.apiSearch("movie", "currentMovies");
      this.apiSearch("tv", "currentSeries");
    },

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
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}
</style>
