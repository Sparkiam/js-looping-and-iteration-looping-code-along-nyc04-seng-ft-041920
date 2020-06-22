// Code your solutions in this file
let thankYouCard = []

function writeCards(arr,str) {
  for (let i = 0; i < arr.length; i++) {
    thankYouCard.push(`Thank you, ${arr[i]}, for the wonderful ${str} gift!`);
  }
  return thankYouCard
}

writeCards(arr,str);


function countDown(n) {
    for (let i = 0; i <= n; i++ ) {console.log(i)} 
}
countDown(n);