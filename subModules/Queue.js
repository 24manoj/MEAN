

/**
 This file contains all the sub methos.
 */
/*
file name: linked
created: 19-07-2019
 Name: Manoj kumar k s <manoj.ks.24.mk@gmail.com>
 */
/*

/* This class contains all functions of queue*/
module.exports=class singleQueue
{
    constructor()
    {
        this.f=0;
        this.r=0;
        this.queue;
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

    dequeue()
    {
        if(this.isEmpty())
        {
            console.log("underflow");
            return;
        }
        var rem=this.queue[this.f];
        this.f+=1;
        return rem;
    }


    isEmpty()
    {
        if(this.f==this.r) return true;
        else return false;

    }

    size()
        {
            if(this.isEmpty()) return 0;
            return(this.f-this.r)

        }
}