const Card = require('./Card')
const Player = require('./Player')

/**
 * Class representing a deck.
 */
class Deck {
  /**
   * Create a deck.
   */
  constructor() {
    this.cards = [
      new Card('A', '♠️️', null, 1),
      new Card('2', '♠️️', null, 2),
      new Card('3', '♠️️', null, 3),
      new Card('4', '♠️️', null, 4),
      new Card('5', '♠️️', null, 5),
      new Card('6', '♠️️', null, 6),
      new Card('7', '♠️️', null, 7),
      new Card('8', '♠️️', null, 8),
      new Card('9', '♠️️', null, 9),
      new Card('10', '♠️️', null, 10),
      new Card('J', '♠️️', 'switch', 11),
      new Card('Q', '♠️️', 'watch', 12),
      new Card('K', '♠️️', null, 13),
      new Card('A', '♦️', null, 1),
      new Card('2', '♦️', null, 2),
      new Card('3', '♦️', null, 3),
      new Card('4', '♦️', null, 4),
      new Card('5', '♦️', null, 5),
      new Card('6', '♦️', null, 6),
      new Card('7', '♦️', null, 7),
      new Card('8', '♦️', null, 8),
      new Card('9', '♦️', null, 9),
      new Card('10', '♦️', null, 10),
      new Card('J', '♦️', 'switch', 11),
      new Card('Q', '♦️', 'watch', 12),
      new Card('K', '♦️', null, 0),
      new Card('A', '♣️', null, 1),
      new Card('2', '♣️', null, 2),
      new Card('3', '♣️', null, 3),
      new Card('4', '♣️', null, 4),
      new Card('5', '♣️', null, 5),
      new Card('6', '♣️', null, 6),
      new Card('7', '♣️', null, 7),
      new Card('8', '♣️', null, 8),
      new Card('9', '♣️', null, 9),
      new Card('10', '♣️', null, 10),
      new Card('J', '♣️', 'switch', 11),
      new Card('Q', '♣️', 'watch', 12),
      new Card('K', '♣️', null, 13),
      new Card('A', '❤️', null, 1),
      new Card('2', '❤️', null, 2),
      new Card('3', '❤️', null, 3),
      new Card('4', '❤️', null, 4),
      new Card('5', '❤️', null, 5),
      new Card('6', '❤️', null, 6),
      new Card('7', '❤️', null, 7),
      new Card('8', '❤️', null, 8),
      new Card('9', '❤️', null, 9),
      new Card('10', '❤️', null, 10),
      new Card('J', '❤️', 'switch', 11),
      new Card('Q', '❤️', 'watch', 12),
      new Card('K', '❤️', null, 0),
      new Card('Joker', null, null, -1),
      new Card('Joker', null, null, -1),
    ]
  }

  /**
   * Shuffles the cards in the deck using the Fisher-Yates method.
   */
  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = this.cards[i]
      this.cards[i] = this.cards[j]
      this.cards[j] = temp
    }
  }

  /**
   * Deals cards to players.
   * @param {Player} player Player who is dealt the cards.
   * @return {Array} Dealt cards.
   */
  deal(player) {
    return !player.isLutch ? this.cards.splice(0, 5) : this.cards.splice(0, 4)
  }
}

module.exports = Deck
