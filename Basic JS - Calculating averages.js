var Calculator = 
{
 average: function() 
 {
  var s = 0;

  for(var i = 0; i < arguments.length; i++)
  {
    s += parseInt(arguments[i]);
  }

  return arguments.length === 0 ? 0 : s / arguments.length;
 }
};