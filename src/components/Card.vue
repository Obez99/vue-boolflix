<template>
  <ul>
    <li v-if="cardData.title">Titolo: {{ cardData.title }}</li>
    <li v-else>Titolo: {{ cardData.name }}</li>
    <li v-if="cardData.original_title">
      Titolo originale: {{ cardData.original_title }}
    </li>
    <li v-else>Titolo originale: {{ cardData.original_name }}</li>
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
    <li>
      Voto: <i class="fa fa-star" v-for="n in convertRating()" :key="n"></i>
    </li>

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
  methods: {
    convertRating() {
      return Math.round(this.cardData.vote_average / 2);
    },
  },
};
</script>

<style>
</style>