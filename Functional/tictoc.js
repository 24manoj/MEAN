"use strict"
var board=Array.from(Array(3), ()=>new Array(3));
var read=require('readline-sync');
var c=0;
var value=0;


init();
inp();
function init(){

    for(var i=0;i<3;i++)
    {
        for(var j=0;j<3;j++){
         board[i][j]=0;
     }
    }
    print();
}
function print()
{
    for(var i=0;i<3;i++)
    { var str="";
        for(var j=0;j<3;j++){
            str=str+ board[i][j]+" ";
        
     }
     console.log(str);
    }

}

function inp(){
    var i=0;
for( i=0;i<9;i++){
var index1=read.questionInt("Enter x value [0-2]");
var index2=read.questionInt("Enter y value[0-2]");
play(index1,index2,1);
if(i<=8)
system();
}if(i==9)
{
console.log("TIE ")
process.kill();
}}

function system()
{ c++;
    var index1=parseInt((Math.random()*10)%3);
   
    var index2=parseInt((Math.random()*10)%3);

if(board[index1][index2]==0)
{
    console.log("System x and y values are "+index1+ " and "+index2+" ");
play(index1,index2,2);
}
else if(c<=8) 
system();
}

function play(index1,index2,ele){

    if(board[index1][index2]==0)
    {
    board[index1][index2]=ele;
    print();
    value=check(ele);
    if(value!=0)
    {
        console.log("Player "+value+"  wins");
        process.exit();
    }
    }else if(c<=9){
console.log("slot filled");
inp();
    }
}

function check(ele)
{ var res=0;

     for(var i=0;i<3;i++){

        if(board[i][0]==ele && board[i][1]==ele && board[i][2]==ele)
        {
              res=ele;
             return ele;
        }
        if(board[0][i]==ele && board[1][i]==ele && board[2][i]==ele)
        {
        res=ele;
        return ele;
        }
        if(board[0][0]==ele && board[1][1]==ele && board[2][2]==ele)
        {
        res=ele;
        return ele;
        }
        if(board[0][2]==ele && board[1][1]==ele && board[2][0]==ele)
        {
        res=ele;
        return ele;
        }
        }
        return(0);
    
}

 