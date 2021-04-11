
let PrintOnRoot=() =>{

//  Actuall code starts from here   
    function adderMaker(x){
        let sum  = x;
        return function(y){
           return sum += y;  
        } 
    }

    let magicalFunction = adderMaker(10);


    console.log(magicalFunction(1))
    console.log(magicalFunction(1))
    console.log(magicalFunction(1))
    console.log(magicalFunction(1))






































}

