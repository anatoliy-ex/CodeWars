function invert(array) 
{
  var array1 = [];
   for(var i = 0; i < array.length; i++)
     {
       array1[i] = array[i] * (-1);
     }
   return array1;
}
