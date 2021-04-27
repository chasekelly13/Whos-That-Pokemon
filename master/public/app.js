const app = Vue.createApp({
  data() {
    return {
      pokemonGuess: "",
      actualPokemon: "red",
      currentScore: 20,
      totalScore: 0,
    };
  },
  watch: {},
  computed: {},
  methods: {
    guess(pokemon) {
      if (pokemon.toLowerCase() === this.actualPokemon) {
        console.log("Correct Answer!");
      } else {
        console.log("Guess Again!");
      }
    },
  },
});

app.mount("#pokemon");
