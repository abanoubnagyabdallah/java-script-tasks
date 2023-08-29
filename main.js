//[1] حول نوع البيانات الآتي ل number  
var text = "10";
console.log(Number(text));  //10


//[2] nullish operator  ??
var candies = {
    chocolate: 10,
    lollipops: null,
    sourStrips: undefined,
    jellyBeans: 8,
    licorice: null,
};
var gummyBears = 1;

var resultOne = candies.chocolate ?? `gummyBears : ${gummyBears}`;  //10
var resultTwo = candies.lollipops ?? `gummyBears : ${gummyBears}`;  //gummyBears : 1
var resultThree = candies.sourStrips ?? `gummyBears : ${gummyBears}`;   //gummyBears : 1
var resultFour = candies.jellyBeans ?? `gummyBears : ${gummyBears}`;    //8
var resultFive = candies.licorice ?? `gummyBears : ${gummyBears}`;  //gummyBears : 1
console.log(resultOne);
console.log(resultTwo);
console.log(resultThree);
console.log(resultFour);
console.log(resultFive);




//[3] 
var shawarma = {
    meat: 2,
    chick: 3,
}

function getShawarma(Name, Age) {
    if (Age >= 20) {
        console.log("chick: " + shawarma.chick);
    }
    else {
        console.log("meat: " + shawarma.meat);
    }
}
getShawarma("abanoub", 21);



//[4] this example in README file 