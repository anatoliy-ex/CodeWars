function validatePIN (pin) 
{

    if(pin.match(/^[0-9]+$/) != null && (pin.length == 4 || pin.length == 6))
    {
        return true;   
    } 
    else 
    {   
      return false;    
    }
}