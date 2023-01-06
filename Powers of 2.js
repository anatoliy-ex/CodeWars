function powersOfTwo(n)
{
  let array = [];
  
  for(var i = 0; i <= n; i++)
    {
      array[i] = Math.pow(2,i)
    }
  return array;
}