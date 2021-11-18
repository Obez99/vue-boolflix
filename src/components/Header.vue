<template>
  <header>
    <h1>BOOLFIX</h1>

    <SearchBar @search="sendQuery"></SearchBar>
  </header>
</template>

<script>
import SearchBar from "./SearchBar.vue";
export default {
  name: "Header",
  components: { SearchBar },

  methods: {
    sendQuery(str) {
      this.$emit("search", str);
    },
  },
};
</script>

<style lang="scss">
@import "../styles/header.scss";
</style>