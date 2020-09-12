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
      new Card('As', 'Pique', 1),
      new Card('2', 'Pique', 2),
      new Card('3', 'Pique', 3),
      new Card('4', 'Pique', 4),
      new Card('5', 'Pique', 5),
      new Card('6', 'Pique', 6),
      new Card('7', 'Pique', 7),
      new Card('8', 'Pique', 8),
      new Card('9', 'Pique', 9),
      new Card('10', 'Pique', 10),
      new Card('Valet', 'Pique', 11),
      new Card('Dame', 'Pique', 12),
      new Card('Roi', 'Pique', 13),
      new Card('As', 'Carreau', 1),
      new Card('2', 'Carreau', 2),
      new Card('3', 'Carreau', 3),
      new Card('4', 'Carreau', 4),
      new Card('5', 'Carreau', 5),
      new Card('6', 'Carreau', 6),
      new Card('7', 'Carreau', 7),
      new Card('8', 'Carreau', 8),
      new Card('9', 'Carreau', 9),
      new Card('10', 'Carreau', 10),
      new Card('Valet', 'Carreau', 11),
      new Card('Dame', 'Carreau', 12),
      new Card('Roi', 'Carreau', 0),
      new Card('As', 'Trèfle', 1),
      new Card('2', 'Trèfle', 2),
      new Card('3', 'Trèfle', 3),
      new Card('4', 'Trèfle', 4),
      new Card('5', 'Trèfle', 5),
      new Card('6', 'Trèfle', 6),
      new Card('7', 'Trèfle', 7),
      new Card('8', 'Trèfle', 8),
      new Card('9', 'Trèfle', 9),
      new Card('10', 'Trèfle', 10),
      new Card('Valet', 'Trèfle', 11),
      new Card('Dame', 'Trèfle', 12),
      new Card('Roi', 'Trèfle', 13),
      new Card('As', 'Coeur', 1),
      new Card('2', 'Coeur', 2),
      new Card('3', 'Coeur', 3),
      new Card('4', 'Coeur', 4),
      new Card('5', 'Coeur', 5),
      new Card('6', 'Coeur', 6),
      new Card('7', 'Coeur', 7),
      new Card('8', 'Coeur', 8),
      new Card('9', 'Coeur', 9),
      new Card('10', 'Coeur', 10),
      new Card('Valet', 'Coeur', 11),
      new Card('Dame', 'Coeur', 12),
      new Card('Roi', 'Coeur', 0),
      new Card('Joker', null, -1),
      new Card('Joker', null, -1),
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
