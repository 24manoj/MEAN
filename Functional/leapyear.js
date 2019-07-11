var read=require('readline-sync');
var year=read.question("Year to check leap year    ");
var res=false;
if(year%4==0) { 
  res=true;
  if(year%100==0)
    { 
         res=false;
         if(year%400==0) 
         res=true;
    }
}

  if(res) 
  console.log(year+ "  is a leap year ");
  else
   console.log(year +"  not a leap year");  