var min = function(list)
{
  let min = list[0];
  
    for(let i = 0; i < list.length; i++)
      {
        if(min >= list[i])
          {
            min = list[i]
          }
      }
  
    return  min;
}

var max = function(list)
{
  let max = list[0];
  
    for(let i = 0; i < list.length; i++)
      {
          if(max <= list[i])
          {
            max = list[i]
          }
      }
  
    return  max;
}