let sibs = document.querySelector(".sibs");
let food = document.querySelector(".resturant");
//button
let button = document.querySelector("button");
//other pieces of body
let result = document.querySelector(".result");
let body = document.querySelector("body");

button.onclick=(function(){
    let usersibs=sibs.value;
    let userfood=food.value;
    if(usersibs <= 10 && userfood==="Mcdonald's"){
     result.innerHTML="You have " +usersibs+" siblings and you love " +userfood+ ". Your favorite color is lavender ";
        body.style.background="lavender";
    } else if(usersibs <= 10 && userfood==="Cane's"){
     result.innerHTML="You have " +usersibs+" siblings and you love " +userfood+ ". Your favorite color is pink";
        body.style.background="pink";
    }  else if(usersibs >= 10 && userfood==="Mcdonald's"){
     result.innerHTML="You have " +usersibs+" siblings and you love " +userfood+ ". Your favorite color is yellow";
        body.style.background="yellow";
    } else if(usersibs >= 10 && userfood==="Cane's"){
     result.innerHTML="You have " +usersibs+" siblings and you love " +userfood+ ". Your favorite color is purple";
        body.style.background="purple";
    }
});