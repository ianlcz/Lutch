/**
 * Class representing a card.
 */
class Card {
  /**
   * Create a card.
   * @param {string} rank A, 2, 3, ..., J, Q, K.
   * @param {string} suit ♠, ♦, ♣, ♥.
   * @param {string} power The card's power (switch, watch).
   * @param {number} point Card's value.
   */
  constructor(rank, suit, power, point) {
    this.rank = rank
    this.suit = suit
    this.power = power
    this.point = point
  }
}

module.exports = Card
