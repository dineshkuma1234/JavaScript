const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["saktiman","flash","batman"]

// // marvel_heros.push(dc_heros);
// // console.log(marvel_heros);//[ 'thor', 'ironman', 'spiderman', [ 'saktiman', 'flash', 'batman' ] ] (arrays into arays)

// const all_heros=marvel_heros.concat(dc_heros);
// console.log(all_heros);//[ 'thor', 'ironman', 'spiderman', 'saktiman', 'flash', 'batman' ]


// const all_heros2=[...marvel_heros,...dc_heros];
// console.log(all_heros2);//[ 'thor', 'ironman', 'spiderman', 'saktiman', 'flash', 'batman' ]

// const massiArray=[1,2,3,[4,5,[6,7]],8,9,[10,11]];
// // const resolveArray=massiArray.flat(1);//[ 1, 2, 3, 4, 5, [ 6, 7 ], 8, 9, 10, 11 ]
// const resolveArray=massiArray.flat(Infinity)//[1,2,3,4,5,6,7,8,9,10,11]
// console.log(resolveArray)


console.log(Array.isArray("dinesh"));//false
console.log(Array.from("dinesh"));//[ 'd', 'i', 'n', 'e', 's', 'h' ] (convert into array)

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]


console.log(Array.from({name:'dinesh'}));//[] interview ->(gives u an empty array becouse first we have to define that make an array by using key or either value )

