<template>
  <div id="app"></div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      apiKey: "031b25f0ecd29749a18d82fd3135886f",
    };
  },
  mounted() {
    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: this.apiKey,
          query: "ciao",
        },
      })
      .then((response) => {
        console.log(response.data.results);
      });
  },
};
</script>

<style lang="scss">
</style>
