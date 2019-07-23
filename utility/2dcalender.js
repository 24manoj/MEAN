/*
 This file contains all the sub methos of file 2d calander.
 */
/*
file name:2darray
created: 22-07-2019
 Name: Manoj kumar k s <manoj.ks.24.mk@gmail.com>
 */
//Tell to work in modern way.
"use strict"
/* Class NODE  is used to create nodes for the insertion,
it has a constructer which takes one argumnet.Initailizes the next and prev to null,and data.*/
let cal=[];
let we=[];
//finds the number of days present in month and finds the day of the 1st day.prints 
let week=(y,m)=>
{
    let i=1;
    let count=0;
    let day=[];
    we=["sun","mon","tue","wed","thu"," fri","sat"];
    cal.push(we);
    //gets the number of days
    let days=new Date(y,m,0).getDate();
    //gets  1st day of the month
    let first=new Date(y,m-1,1).getDay();
    while(i<=first)
    { 
        day.push("   ");
        i+=1; 
        count+=1;
    }
    i=1;
    while(i<=days)
    {
        if(count==0)   day=[];
        if(i>=9)  day.push(i+" ");
        else day.push(i+"  ");
        count+=1;
        if(count===7)
        {
            cal.push(day);
            count=0;
        }
        i+=1;
    }
    cal.push(day);
    console.log(cal);
}
module.exports={week};