<template>
  <div>
    <h2>FILM</h2>
    <Card
      v-for="card in currentMovies"
      :key="card.id"
      :rawCardData="card"
    ></Card>
    <h2>SERIE</h2>
    <Card
      v-for="card in currentSeries"
      :key="card.id"
      :rawCardData="card"
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
</style>