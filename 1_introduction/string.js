console.log(String(true))

const name = "Gopal"
const clases = 14

const  game = new String("   Gamer-games-of-all   ")

console.log(game.toUpperCase())
console.log(game.__proto__)
console.log(game.charAt(2))
console.log(game.indexOf("m"))

console.log(game.substring(1,5))
console.log(game.slice(1,5))
console.log(game.trim())
console.log(game.replace('gam',"*-*"))
console.log(game.includes('a'))
console.log(game.split("-"))

const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);