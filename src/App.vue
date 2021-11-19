<template>
  <div id="app">
    <Header @search="fetchQuery"></Header>

    <!-- Movie List !-->
    <CardsContainer :passItem="itemToSearch"></CardsContainer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import CardsContainer from "./components/CardsContainer.vue";
export default {
  name: "App",
  components: { Header, CardsContainer },
  data() {
    return {
      itemToSearch: "",
    };
  },
  methods: {
    fetchQuery(str) {
      this.itemToSearch = str;
    },
  },
};
</script>

<style lang="scss">
@import "./styles/app.scss";
</style>