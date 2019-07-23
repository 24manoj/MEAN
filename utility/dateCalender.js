/* This function returns the number of days in month,it takes three parameter y=year,m=month,s=statrt of the month,defaut=0,
return total number of days present*/
let getDays=(m,y,s=0)=>
{   //gets the number of days in a month
    let days=new Date(y,m,s).getDate();
    return days;
}
/*This function retuns the day of the week,it takes three parameter y=year,m=month,s=statrt of the month,defaut=1*/ 
let getMonthDay=(m,y)=>
{ 
    //gets the start day of the month.
    
    let day=new Date(y,m-1,1).getDay();
    return day;
}
let getStrMonthDay=(day)=>
{  let days=["sun","mon","tue","wed","thu","fri","sat"];
    return days[day];
}
module.exports={getDays,getMonthDay,getStrMonthDay};