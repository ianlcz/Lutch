/**
 * Class representing a player.
 */
class Player {
  /**
   * Create a player.
   * @param {string} name Player's name.
   */
  constructor(name) {
    this.name = name
    this.deck = []
    this.score = 0
    this.isLutch = true
  }

  /**
   * Modifies player's isLutch boolean attribut.
   */
  setIsLutch() {
    this.isLutch = !this.isLutch
  }

  /**
   * Calculates the score according to the point of the cards in the deck.
   * @return {number} Player's score.
   */
  calculateScore() {
    this.deck.map((card) => {
      this.score += card.point
    })
    return this.score
  }
}

module.exports = Player
