const Deck = require("./Deck");
const Player = require("./Player");

/**
 * Class representing game.
 */
class Game {
  /**
   * Create a game.
   * @param {number} playersRequired Required number of players to play a game.
   */
  constructor(playersRequired) {
    this.playersRequired = playersRequired;
    this.pit = new Deck();
    this.pit.cards = [];
    this.deck = new Deck();
    this.players = [];
  }

  /**
   * Starts the gameplay.
   */
  start() {
    this.deck.shuffle();

    if (this.playersRequired <= 8) {
      // Created players according to the required number of players in the game
      for (let index = 0; index < this.playersRequired; index++) {
        let player = new Player(`J${index + 1}`);
        player.cards = this.deck.deal(player);
        this.players.push(player);
      }
    }
  }
  /**
   * Displays the score board.
   * @return {String} Score board.
   */
  displayScoreboard() {
    return `${
      `---------------------------------\n|\t\tSCORE\t\t|\n---------------------------------\n` +
      this.players
        .sort((a, b) => a.score - b.score)
        .map((player) => `|\t${player.name}\t|\t${player.score}\t|\n`)
        .join("")
    }---------------------------------`;
  }
}

module.exports = Game;
