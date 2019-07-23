/**
 This file contains all the sub methos.
 */
/*
file name: Queue
created: 19-07-2019
 Name: Manoj kumar k s <manoj.ks.24.mk@gmail.com>
 */
/*

/* This class contains all functions of queue*/
var read=require('readline-sync');
module.exports=class singleQueue
{
    constructor()
    {
        this.f=0;
        this.r=0;
        this.queue;
        this.Queue();
    }

    /*creates a new queue that is empty,it requires no parameter,
    initalizes queue*/
    Queue()
    {
        this.queue=[];
    }

    /*add a item to queue from rear end.It requires an iteam,return nothing.*/
    enQueue(item)
    {
       this.queue[parseInt(this.r)]=item;
       this.r+=1;
    }
    /*dequeue removes the elements from front,returns the deleted element*/
     dequeue()
    {
        if(this.isEmpty())
        {
            //console.log("underflow");
            return ' ';
        }
        var rem=this.queue[this.f];
        this.f+=1;
        return rem;
    }

    display()
   {
    if(this.isEmpty()) 
    {
        console.log("EMPTY");
    }
    this.queue.slice(this.f,this.r).forEach(element=>
        {
       console.log(element);
        });
   }
   /* isEmpty--->checks for element present,returns false if present else true.*/
    isEmpty()
    {
        if(this.f==this.r ) return true;
        else return false;
    }
    /*size -->Returns the size of the queue*/
    size()
        {
            if(this.isEmpty()) return 0;
            return(this.r-this.f)

        }
     
  /* cash -->function calculates the cash and updates
   *takes input and add to queue.
   *ask user to come out of queue,if yes then checks the purpose and calculates the cash.until user stops or no data found.
   retruns cash to called function. 
  */
    cash()
    {
        let n=read.questionInt("Enter the Q size ");
        let  arr1=[n];
        let  arr2=[n];
        let i=0;
        let count=0; 
        let cash=0;
        while(i<n)
        {
            arr1[i]=read.question("Purpose of person(w or D)  ");
            console.log(arr1[i]);
            if(arr1[i]==="w"||arr1[i]==="d")
            {
                arr2[i]=read.questionInt("Amt of person  ",(i+1));
                this.enQueue(arr2[i]);
                i+=1;
                this.display();
            }
            else
            {
                console.log("U R option is not present in this bank..");
                return;
            }
        }
        do
        { 
            var choice=read.question("Yes or NO to come out of queue   ");
            if(choice=="yes")
            {  
                if(count>=n)count=0;
                var rem=this.dequeue();
                var index=arr2.indexOf(rem,count);
                count+=1;
                if(cash<=0 && cash < arr2[index])
                {
                if(arr1[index]=="w") {this.enQueue(arr2[index]); 
                    n=n+1;
                    }
                else cash+=arr2[index];
                }
                else
                {
                    if(arr1[index]=="w") cash-=arr2[index];
                    else cash+=arr2[index];
                }
                console.log("Upadted cash is",cash);
            }
            if(choice=="no")
            this.dequeue();
            n=n-1;
        }while(n>0);
        return cash;
        
    }

}