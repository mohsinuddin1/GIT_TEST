console.log("Hello, World!");
console.log("mohsin uddin here");
function add()
{
    let a=prompt();
   for (let i = 1; i <=a; i++) {
        if(i%3==0 && i%5==0)
        {
            console.log("FizzBuzz");
        }
        else if(i%3==0)
        {
            console.log("Fizz");
        }
        else if(i%5==0)
        {
            console.log("Buzz");
        }
        else
        {
            console.log(i);
        }
    
   }
}
console.log(add());