/*
function multi(array, numero){

for(let i = 0; i< array.length; i++){

    if ( array[i] % numero){

    return array[i]

    }

}

}
    console.log(multi([2,3,6,7,8,9,27], 3));




/*
const array = [1, 2, 3, 5, 7, 6, 10];

let numero = 5

for(let i = 0 ; i< array.length; i++){

    if( array[i] > numero){

        
    }
    
}
console.log(array);

*/

function busca(array, numero) {
    if (numero === 0) {
      return undefined;
    }
    return array.find(val => val > 0 && val % numero === 0);
  }
  
  console.log(busca([0, 7, 4, 15, 18, 3, -1, 323, -5], 2));