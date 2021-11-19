<template>
  <div class="movie-card">
    <img
      :src="
        rawCardData.poster_path
          ? imageUrl + rawCardData.poster_path
          : require('../assets/not-found.png')
      "
      :alt="rawCardData.original_title"
    />
    <ul>
      <li>Titolo: {{ cardTitle }}</li>
      <li>Titolo originale: {{ cardOriginalTitle }}</li>

      <li>
        Lingua:
        <span
          :class="
            rawCardData.original_language
              ? `flag-icon flag-icon-${rawCardData.original_language}`
              : `flag-icon flag-icon-xx`
          "
        ></span>
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
    cardTitle() {
      if (this.rawCardData.title) return this.rawCardData.title;
      else return this.rawCardData.name;
    },
    cardOriginalTitle() {
      if (this.rawCardData.original_title)
        return this.rawCardData.original_title;
      else return this.rawCardData.original_name;
    },
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