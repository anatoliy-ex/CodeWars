function countBy(x, n) 
{
   let z = [];
   var y = 0;
  for( var i = 0; i <=n - 1; i++)
    {
       y += x;
       z.push(y);  
    }
  console.log(z);
  return z;
}