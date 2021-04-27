const app = Vue.createApp({
  data() {
    return {
      pokemonGuess: "",
      actualPokemon: "bulbasaur",
      currentScore: 20,
      totalScore: 0,
      pokemonImg:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      message: "",
    };
  },
  watch: {},
  computed: {},
  methods: {
    guess(pokemon) {
      if (pokemon.toLowerCase() === this.actualPokemon) {
        this.message = `Correct Answer! Your Total Score increased by ${this.currentScore}`;
        this.totalScore = this.totalScore + this.currentScore;
        this.currentScore = 20;
      } else {
        this.message = `Guess again! Your Current Score decreased by 1`;
        this.currentScore--;
      }
    },
  },
});

app.mount("#pokemon");
