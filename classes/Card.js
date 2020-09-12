/**
 * Class representing a card.
 */
class Card {
  /**
   * Create a card.
   * @param {string} rank Ace, 2, 3, ..., Jack, Queen, King.
   * @param {string} suit Spades, Diamonds, Clubs, Hearts.
   * @param {*} point Card's value.
   */
  constructor(rank, suit, point) {
    this.rank = rank
    this.suit = suit
    this.point = point
  }
}

module.exports = Card
