let PrintOnRoot=() =>{
    // console.log("script load");

    // Use this method for printing
    printOnDom=(data)=>{
        document.getElementById('root').innerHTML=data
    }

    // yt yr test code starts from here

    let person={
        name:{fname:'mayank',
        lname:'kushwaha'},
        age:26
    }

    Object.defineProperty(person,'name',{
        writable:false
    })

    person.name.fname='ankit';

    person.name ={
        
    }

    printOnDom(JSON.stringify(person))









    
}


