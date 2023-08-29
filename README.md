# //[4]
```
function calculate(num1, num2, method) {
    if (method === "sum") {
        var sum = num1 + num2;
        console.log("summation = " + sum);
    }
    else if (method === "sub") {
        var sub = num1 - num2;
        console.log("subtraction = " + sub);
    }
    else if (method === "multi") {
        var multi = num1 * num2;
        console.log("multiplication = " + multi);
    }
    else if (method === "divid") {
        var divid = num1 / num2;
        console.log("division = " + divid);
    }
    else{
        console.log("Unknown Method, Try Agin");
    }
}
calculate(1,2, "daaaa");    //Unknown Method, Try Agin
calculate(1,2, "sum");  //summation = 3
calculate(1,2, "multi");    //multiplication = 2

```