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
      <li><strong>Titolo:</strong> {{ cardTitle }}</li>
      <li><strong>Titolo originale:</strong> {{ cardOriginalTitle }}</li>

      <li>
        <strong>Lingua: </strong>
        <span
          :class="
            rawCardData.original_language
              ? `flag-icon flag-icon-${rawCardData.original_language}`
              : `flag-icon flag-icon-xx`
          "
        ></span>
      </li>

      <li>
        <strong>Voto: </strong>
        <i
          class="fa fa-star text-danger"
          v-for="n in cardData.stars"
          :key="n"
        ></i>
        <span v-if="cardData.stars">
          <i
            class="fa fa-star-o text-danger"
            v-for="n in 5 - cardData.stars"
            :key="n"
          ></i>
        </span>
        <span v-else class="text-danger">Nessun voto disponibile</span>
      </li>

      <li class="mt-3">
        <strong>Overview:</strong>
        <p>{{ rawCardData.overview }}</p>
        <span v-if="!rawCardData.overview" class="text-danger"
          >Nessuna overview disponibile</span
        >
      </li>

      <li class="mt-3">
        <strong>Cast: </strong>
        <span v-for="(actor, i) in this.cast" :key="i">
          <span>{{ actor }}</span>
          <span v-if="i < cast.length - 1">, </span>
          <span v-else>.</span>
        </span>
        <span v-if="this.cast.length === 0" class="text-danger">
          Nessun cast disponibile</span
        >
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Card",
  props: {
    rawCardData: Object,
    apiUrl: String,
    apiKey: String,
    type: String,
  },
  data() {
    return {
      imageUrl: "https://image.tmdb.org/t/p/w342/",
      cast: [],
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

  mounted() {
    axios
      .get(this.apiUrl + `/${this.type}/${this.rawCardData.id}/credits`, {
        params: {
          api_key: this.apiKey,
        },
      })
      .then((resp) => {
        for (let i = 0; i < 5; i++) {
          if (!resp.data.cast[i]) return;
          this.cast.push(resp.data.cast[i].name);
        }
      });
  },
};
</script>

<style lang="scss">
@import "../styles/card.scss";
</style>