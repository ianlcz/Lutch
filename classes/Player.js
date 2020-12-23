const Deck = require("./Deck");
const scanf = require("scanf");

/**
 * Class representing a player.
 */
class Player {
  /**
   * Create a player.
   * @param {string} name Player's name.
   */
  constructor(name) {
    this.name = name;
    this.cards = [];
    this.score = 0;
    this.isLutch = true;
  }

  /**
   * Pick a card from deck.
   * @param {Deck} typePickaxe Deck of cards or Pit.
   * @param {Boolean} isFirst true : Pick the first card of the deck / false : Pick the last card of the deck
   * @return {Card} The card drawn by the player.
   */
  pick(typePickaxe, isFirst = true) {
    return isFirst
      ? typePickaxe.cards.splice(0, 1)[0]
      : typePickaxe.cards.splice(-1)[0];
  }

  /**
   * Exchanges or not a new card with the player's deck.
   * @param {Deck} typePickaxe Deck of cards or Pit.
   * @param {Boolean} isDeck test.
   * @param {Boolean} isWanted true : Switch cards / false : Put card in the Pit.
   */
  placeCard(typePickaxe, isDeck = true, isWanted = false) {
    if (isWanted) {
      let copyCards = [...this.cards];

      // Entering the index of a card
      console.log("> Entrez l'index d'une de vos cartes [1-4]");
      let indexCard = scanf("%d");

      if (indexCard > 0 && indexCard < 5) {
        if (isDeck) {
          // Put the card you want to replace in the pit
          typePickaxe.pit.cards.push(this.cards[indexCard - 1]);

          // Invert the player's card with the drawn card
          this.cards = [
            ...copyCards.slice(0, indexCard - 1),
            this.pick(typePickaxe.deck),
            ...copyCards.slice(indexCard, copyCards.length),
          ];
        } else {
          // Get the card that the player wants to change
          let cardToChange = this.cards[indexCard - 1];

          // Set the last card in the pit in place of the card the player wants to change
          this.cards[indexCard - 1] = this.pick(typePickaxe.pit, false);

          // Put the card that the player wants to change in the pit
          typePickaxe.pit.cards.push(cardToChange);
        }
      }
    } else if (isDeck) {
      // Put the pick card into the pit
      typePickaxe.pit.cards.push(this.pick(typePickaxe));
    }
  }

  /**
   * Modifies player's isLutch boolean attribut.
   */
  setIsLutch() {
    this.isLutch = !this.isLutch;
  }

  /**
   * Calculates the score according to the point of the cards in the deck.
   * @return {number} Player's score.
   */
  calculateScore() {
    this.cards.map((card) => {
      this.score += card.point;
    });
    return this.score;
  }
}

module.exports = Player;
