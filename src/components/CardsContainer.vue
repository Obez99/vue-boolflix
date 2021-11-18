<template>
  <div class="d-flex flex-wrap">
    <Card v-for="movie in currentMovies" :key="movie.id" :rawCardData="movie">
    </Card>
    <button @click="searchItems()"></button>
    <Card
      v-for="series in currentSeries"
      :key="series.id"
      :rawCardData="series"
    ></Card>
  </div>
</template>

<script>
import axios from "axios";
import Card from "./Card.vue";
export default {
  name: "CardsContainer",
  components: { Card },
  props: {
    itemToSearch: String,
  },
  data() {
    return {
      apiUrl: "https://api.themoviedb.org/3",
      apiKey: "031b25f0ecd29749a18d82fd3135886f",
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

<style>
</style>