function fibo(n)
{
    if(n === 0) return 0;
    if(n === 1) return 1;

    return fibo(n-1) + fibo(n-2);
}

for(let i = 0; i < 13; i++)
{
    var x = fibo(i);
    console.log(x);
}