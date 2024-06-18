// const myArr=[1,2,3,4,5,6,7]
// console.log(myArr.slice(1,4))
// console.log(myArr.splice(1,4));


const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const newArr=marvel_heros.concat(dc_heros)
// console.log(newArr);

//spread operator

const allHeros = [...marvel_heros,...dc_heros];
// console.log(allHeros)

// const arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const myArr=arr.flat(Infinity)
// console.log(myArr)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"hitesh"}))  //interesting

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3))