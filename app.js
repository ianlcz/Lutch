// Import des classes nécessaires
const Deck = require('./classes/Deck')
const Player = require('./classes/Player')

// Initialisation des classes Deck et Player
let paquet = new Deck()
let j1 = new Player('J1')
let j2 = new Player('J2')
let j3 = new Player('J3')

// Mélange du paquet de cartes
paquet.shuffle()

// Distribution des cartes aux joueurs
j1.deck = paquet.deal(j1)
j2.deck = paquet.deal(j2)
j3.deck = paquet.deal(j3)

j1.calculateScore()
j2.calculateScore()
j3.calculateScore()

console.log(j1, j2, j3)
