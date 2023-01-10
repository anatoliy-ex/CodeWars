var isSquare = function(n)
{
   let a = Math.sqrt(n);
  
  if(a % 1 === 0 && a >= 0) 
    {
      return true;
    }
  else
    {
      return false;
    }
}