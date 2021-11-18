<template>
  <div class="d-flex align-items-center">
    <input
      type="text"
      v-model="itemToSearch"
      class="me-3"
      @keyup.enter="searchItem"
    />
    <button @click="searchItem" class="btn btn-danger">Cerca</button>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      itemToSearch: "",
    };
  },

  methods: {
    searchItem() {
      this.$emit("search", this.itemToSearch);
    },
  },
};
</script>

<style>
</style>