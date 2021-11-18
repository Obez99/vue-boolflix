<template>
  <div>
    <input type="text" v-model="itemToSearch" />
    <button @click="$emit('search', itemToSearch)">Cerca</button>
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
};
</script>

<style>
</style>