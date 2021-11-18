<template>
  <ul>
    <li>Titolo: {{ cardData.title }}</li>
    <li>Titolo originale: {{ cardData.original_title }}</li>
    <li>
      Lingua:
      <span
        :class="
          cardData.original_language
            ? `flag-icon flag-icon-${cardData.original_language}`
            : `flag-icon flag-icon-xx`
        "
      ></span
      >{{ cardData.original_language }}
    </li>
    <li>Voto: {{ cardData.vote_average }}</li>
    <li>
      <img
        :src="imageUrl + cardData.poster_path"
        :alt="cardData.original_title"
      />
    </li>
  </ul>
</template>

<script>
export default {
  name: "Card",
  props: {
    cardData: Object,
  },
  data() {
    return {
      imageUrl: "https://image.tmdb.org/t/p/w342/",
    };
  },
};
</script>

<style>
</style>