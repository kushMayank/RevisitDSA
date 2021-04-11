
let PrintOnRoot=() =>{

    //  Actuall code starts from here   


function outer(){
    var x=  10;
      function inner(){
        y = 20;
         function innerMost(){
            console.log(`value of x is ${x}`)
            console.log(`value of y is ${y}`)
         }
         innerMost();
      }

      inner();
      outside();
}

function outside(){
    console.log(`value of x is ${x}`);
    console.log( x);

    console.log(`value of y is ${y}`)   
}

    outer();
}