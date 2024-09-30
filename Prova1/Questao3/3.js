function ordem(){

    if(i % 3){

        console.log("Fizz");

    }else if(i % 5 ){

        console.log("Buzz");

    }else if(i % 3 , 5){

        console.log("FizzBuzz");
    }



};

for(i = 0; i<= 100; i++){

    console.log(ordem(i))
}
