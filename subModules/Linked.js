/**
 This file contains all the sub methos.
 */
/*
file name: linked
created: 18-07-2019
 Name: Manoj kumar k s <manoj.ks.24.mk@gmail.com>
 */

var read=require('readline-sync');
var fs=require('fs');
"use strict"

/*
This class contains a constructur which will be invoked every time insert function is called.
It contains data and next members   */ 
class NODE 
{
   constructor(data)
   {
    //initalize the values when it invokes.
     this.data=data;
     this.next=null;
    }//end of constructur  
}//end of class

/*creating class linkedlist and member functions to add,delete,display,sort the nodes
Class linkedlist contains a constructur which is initalized to null.
*/

module.exports.classlink=class linkedlist
{
  constructor()
  {
    this.head=null;
  }

  /* 
  Insertfront-->To create a node and insert front.
  takes element as a parameter.
 */

  insertfront(element)
  {
    let newnode=new NODE(element);
    if(this.head===null)
    {
      this.head=newnode;
      console.log("inserted data ",element);
    }
    else
    {
      newnode.next=this.head;
      this.head=newnode;
      console.log("inserted  data ",element);
    }
   this.sort();  
  }

  /*
   Display ---> prints all the data exist in the linked list.
  */

   display()
   {
     if(this.head==null)
     {
       console.log("Nothing to diplay.");
       return;
     }
     console.log("Elements present")
     this.temp=this.head;
     while(this.temp!==null)
     {
        console.log(this.temp.data);
        this.temp=this.temp.next;
      }
    }

  /**  Delete-->Function takes key as parameter.
   *loops until the key found and deletes.
   * if key not found prints msg.
  */

   delete(key)
   {
     this.prev=this.head;
     this.temp=this.head;
     if(this.temp.data===key)
     {
       this.head=this.temp.next;
       
      }
     else
     {
       while(this.temp!==null)
       {
         if(this.temp.data===key)
         {
         this.prev.next=this.temp.next;
         
        }
      this.prev=this.temp;
      this.temp=this.temp.next;
    }
  }
}

/*
Search-->This function takes key as parameter.
*loops until the key is found.
*prints the index of the key,if key present.
if not error msg.
*/

  search(key)
  {
    let count=0;
    this.temp=this.head;
    while(this.temp!==null)
    {//=== which is used to check deep equals
      count+=1;
      if(this.temp.data===key)
      {
        
        console.log(key,"   found @ ",count);
        console.log(key,"  Deleted from list");
        this.delete(key);
        this.sort();
        return;
      }
      this.temp=this.temp.next;
    }
    if(this.temp==null)
    {
      console.log("key not found!!!!!!!");
      this.insertfront(key);
    }
  }

  /*
   *Store--->This function stores the elements to file.
   *Storing happens in Asynchrons and callbacks.
  */
  
  store()
   {
    var content=[];
    this.temp=null;
    this.temp=this.head;
    //loops until temp reaches null.
     while(this.temp!==null)
     {
       content.push(this.temp.data);
       this.temp=this.temp.next;
      }//Writes into file ,Asynchronous mode ,uses callbacks to check the results.
      fs.writeFile("E://MEAN//text1.txt",content,(err,data)=>{
        if(err) throw "NOt added to file";
        else console.log("sucessfully inserted into file");
      });
    }

   
/* Sort function used to sort the linked list in ascending order..
*Sorting is done based on value.
*inter change data if found greater,not the node.
*/
    sort()
    {
      if(this.head==null) 
      {
        console.log("Under flow");
        return;
      }
      else
      {
        this.temp=this.head;
        while(this.temp!==null)
        { this.current=this.temp.next;
          while(this.current!==null)
          {
            if(parseInt(this.temp.data)>=parseInt(this.current.data))
            {
              this.temp1=this.temp.data;
              this.temp.data=this.current.data;
              this.current.data=this.temp1;
              
            }
            this.current=this.current.next;
          }
          this.temp=this.temp.next;
        }
        
      }
    }

}

/*readfile-->This function reads data from file 
* Used Built in commands to read data
* Reading data happens in synchronus manner.

*/

//ES6 function declaration..
module.exports.readfile=readfile=()=>{
    var content;
   //Reads the data,data will in ascii format.
    content=(fs.readFileSync("E://MEAN//text.txt"));
    return content;
  }


