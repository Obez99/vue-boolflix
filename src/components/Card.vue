<template>
  <div class="movie-card">
    <img
      :src="imageUrl + rawCardData.poster_path"
      :alt="rawCardData.original_title"
    />
    <ul>
      <li v-if="rawCardData.title">Titolo: {{ rawCardData.title }}</li>
      <li v-else>Titolo: {{ rawCardData.name }}</li>
      <li v-if="rawCardData.original_title">
        Titolo originale: {{ rawCardData.original_title }}
      </li>
      <li v-else>Titolo originale: {{ rawCardData.original_name }}</li>
      <li>
        Lingua:
        <span
          :class="
            rawCardData.original_language
              ? `flag-icon flag-icon-${rawCardData.original_language}`
              : `flag-icon flag-icon-xx`
          "
        ></span
        >{{ rawCardData.original_language }}
      </li>
      <li>
        Voto: <i class="fa fa-star" v-for="n in cardData.stars" :key="n"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    rawCardData: Object,
  },
  data() {
    return {
      imageUrl: "https://image.tmdb.org/t/p/w342/",
    };
  },
  computed: {
    cardData() {
      return {
        stars: this.convertRating(this.rawCardData["vote_average"]),
      };
    },
  },
  methods: {
    convertRating(voteAverage) {
      return Math.round(voteAverage / 2);
    },
  },
};
</script>

<style lang="scss">
@import "../styles/card.scss";
</style>