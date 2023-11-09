

// objects -> collection of key : value pair
// key : string /Number
// Value -> any valid js type

let cap={
    name : "Rahul",
    lastname : "sharma",
    age : 40,
    isAvenger : true,
    movie :["first Avenger", "Winter solider", "Civil War"],
    sayHi : function(){
        console.log("Hay from cap");
    }
}


console.log("name", cap.name);
console.log("lastname", cap.lastname);
console.log("movie", cap.movie[0]);