<template>
  <div class="my-5">
    <h2 v-if="currentMovies.length > 0" class="mb-3 text-center text-black">
      FILM
    </h2>
    <div class="d-flex flex-wrap justify-content-center gap-4">
      <Card
        v-for="card in currentMovies"
        :type="'movie'"
        :key="card.id"
        :rawCardData="card"
        :apiUrl="apiUrl"
        :apiKey="apiKey"
        :movieGenresList="movieGenresList"
      ></Card>
    </div>

    <h2 v-if="currentSeries.length > 0" class="mt-5 text-center text-black">
      SERIE
    </h2>
    <div class="d-flex flex-wrap justify-content-center gap-4">
      <Card
        v-for="card in currentSeries"
        :type="'tv'"
        :key="card.id"
        :rawCardData="card"
        :apiUrl="apiUrl"
        :apiKey="apiKey"
        :tvGenresList="tvGenresList"
      ></Card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Card from "./Card.vue";
export default {
  name: "CardsContainer",
  components: { Card },

  props: {
    passItem: String,
  },

  watch: {
    passItem: function (val) {
      this.itemToSearch = val;
      this.cardType();
    },
  },

  data() {
    return {
      apiUrl: "https://api.themoviedb.org/3",
      apiKey: "031b25f0ecd29749a18d82fd3135886f",
      currentMovies: [],
      currentSeries: [],
      itemToSearch: "",
      movieGenresList: [],
      tvGenresList: [],
    };
  },

  methods: {
    cardType() {
      this.apiSearch("movie", "currentMovies");
      this.apiSearch("tv", "currentSeries");
    },

    apiSearch(itemType, returnType) {
      axios
        .get(this.apiUrl + "/search/" + itemType, {
          params: {
            api_key: this.apiKey,
            query: this.passItem,
            language: "it",
          },
        })
        .then((response) => {
          this[returnType] = response.data.results;
        });
    },
    getGenres(type, returnType) {
      axios
        .get(this.apiUrl + `/genre/${type}/list`, {
          params: {
            api_key: this.apiKey,
            language: "it",
          },
        })
        .then((resp) => {
          this[returnType] = resp.data.genres;
        });
    },
  },

  mounted() {
    this.getGenres("tv", "tvGenresList");
    this.getGenres("movie", "movieGenresList");
  },
};
</script>

<style lang="scss">
</style>