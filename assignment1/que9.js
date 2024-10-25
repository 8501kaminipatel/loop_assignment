
// Verify if a number is prime or not using a loop.

let n = prompt("Enter a Number");

let count = 0;

let j ;

for(j=1; j<=n; j++)
{
    if(n%j==0)
    {
        count++;
    }
}
if(count<=2)
{
    console.log("Prime number",n);
}
else
{
    console.log("Composite number",n);
}