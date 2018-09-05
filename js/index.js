function fib(n){
     let a=1;
     let b=1;
     let ans;
     for(let i=2; i<n; i++){
ans=a+b;
a=b;
b=ans;
     }
     return b;
 }
function fibonacchi(n){
  if ( n == 0 ) return 0;
 
  if (n == 1) return 1;
  return fibonacchi(n-2) + fibonacchi(n-1);
}
let num = parseInt(prompt('Enter a number'));
document.write('<h1>' + fibonacchi(num) + ' Fibonacci number</h1>');
document.write('<h1>' + fib(num) + ' Fibonacci number</h1>');
