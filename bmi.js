export default class bmi{
  bmiCal(weight,height,region)
  {
    let a =  weight/height**2;
    if(region == 'Asia')
    {
      if(a <= 18.5)
      {
        return 'Under weight';

      }
      else
      {
        if(a <= 24.9)
        {
          return 'Normal weight';
        }
        else
        {
          if(a <= 29.9)
          {
            return 'Overweight';
          }
          else
          {
            return 'Obesity';          
          }
        }
      }
    }
    else
    {
      if(a <= 19.5)
      {
        return 'Under weight';

      }
      else
      {
        if(a <= 34.5)
        {
          return 'Normal weight';
        }
        else
        {
          if(a <= 39.9)
          {
            return 'Overweight';
          }
          else
          {
            return 'Obesity';          
          }
        }
      }
    } 
  }
}
