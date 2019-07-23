/*Create the Week Object having a list of WeekDay objects each storing the day (i.e S,M,T,W,Th,..) and the Date (1,2,3..) .
 The WeekDay objects are stored in a Queue implemented using Linked List. Further maintain also a Week Object ,
 in a Queue to finally display the Calendar.
Note - If a particular day has no date then the date is set as empty string and add it to queue. */
/*
file name: unordered list
created: 18-07-2019
Name: Manoj kumar k s <manoj.ks.24.mk@gmail.com>
 */
/*This program takes inputs from cmd and finds day and number of days ,
uses queue to sotre the days and day,prints */
//imports the utility modules
let date=require('../utility/dateCalender');
let q=require('../utility/Queue');
let weekObj=[];
let i=0;
let j=1;
let k=0;
//command line argumnets
let y=parseInt(process.argv[2]);
let m=parseInt(process.argv[3]);
let days=date.getDays(y,m);
let day=date.getMonthDay(y,m);
let repday=day;
while(i<7)
{//creates array of queue objects for 7
     weekObj[i]=new q();
     i+=1;
}
i=0;
while(i<7)
{ 
    if(day==7) day=0;
    //add day to queue
    weekObj[day].enQueue(day);
    day+=1;
     i+=1;
}
day=repday;
while(k<day)
{   //initalize null space with star.
    weekObj[k].enQueue('  '+'*'+' ');
    k+=1;
}

while(j<days)
{ 
    if(day>=7) day=0;

    while(day<7)
    {
        if(j>days)  weekObj[day].enQueue('   '+'*');
        else if(j<9) weekObj[day].enQueue("   "+j);
        else weekObj[day].enQueue("  "+j);
         day+=1;
         j+=1;
    }
}
i=0;
let Strdays=[]
while(i<7)
{ //String day
  Strdays+=date.getStrMonthDay(weekObj[i].dequeue())+" ";
  i+=1;
}
i=0;
j=0;
let str="";
console.log(Strdays);
let count=1;
while(j<6)
{ 
    i=0;
    while(i<7)
    {//pop from queue
        if(count<10) str+=weekObj[i].dequeue();
        else str+=weekObj[i].dequeue();
        count+=1;  
        i+=1; 
        
    }
    console.log(str);
    str="";
    j+=1;
}







