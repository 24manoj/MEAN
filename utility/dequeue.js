/*
 This file contains all the sub methos of file palindrom.
 */
/*
file name: dqueue
created: 20-07-2019
 Name: Manoj kumar k s <manoj.ks.24.mk@gmail.com>
 */
//Tell to work in modern way.
"use strict"
/* Class NODE  is used to create nodes for the insertion,
it has a constructer which takes one argumnet.Initailizes the next and prev to null,and data.*/
class NODE 
{
   constructor(data)
   {
    //initalize the values when it invokes.
     this.prev=null;
     this.data=data;
     this.next=null;
    }//end of constructur  
}//end of class
/*Another class called double linkedlist,it consist of insert,remove,check methods,
this class is made global to ascess*/
module.exports=class doublelinkedlist
{
  constructor()
  {
    this.rear=null;
    this.front=null;
  }
  /*Insert method,inserts the data into the node ,it takes data as argumnet,invokes NODE constructer creates a node,
  it return nothing*/
insert(data)
    {  
        let newnode=new NODE(data);
        //console.log(newnode);
        if(this.rear===null && this.front===null)
        {
            this.rear=newnode;
            this.front=newnode;
        }
        else
        {
            newnode.prev=this.rear;
            this.rear.next=newnode;
            this.rear=newnode;
        }
    }
/* Remove method removes from front,takes no argumnet ,return nothing*/ 
remove()
{ this.temp=this.front;
    this.temp1=this.rear;
    if(this.temp===null && this.temp1===null )
    {
        console.log("NOthing to delete......!!!");
        return;
    }
    //deleting node from front
    this.temp=this.temp.next;
    this.front.next=null;
    this.front=this.temp;
    //deleting rear
    this.temp1=this.temp1.prev;
    this.rear.prev=null;
    this.rear=this.temp1;
}
/* check method starts comparing data from both the end (front and rear),if both end has same data,pop it and continue,
if both reaches to same node pop it and output the result*/
check()
{   var res=true;
    this.temp=this.front;
    this.temp1=this.rear;
    while(this.temp!=this.temp1)
    {
        if(this.temp.data === this.temp1.data )
        {
            res=true;
            this.remove();
        }
        else 
        { 
            res=false; 
            break;
        }
        this.temp=this.temp.next;
        this.temp1=this.temp1.prev;
    }
   
        if(res)
        {
            console.log("Palindrom");
        }
        else
        {
            console.log("not a palindrom");
        }
    
    console.log(this.front);
}

}

