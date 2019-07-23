

/**
 This file contains all the sub methos of class stack.
 */
/*
file name: stack
created: 19-07-2019
 Name: Manoj kumar k s <manoj.ks.24.mk@gmail.com>
 */
/*
*Defining a class stack
*initalizing its memebers
*defining function members pop(),push(),peak(),isEmpty(),size(),stack.*/
module.exports=class StackB
{
    //stackarr
     //Constructor initalize top to -1
     constructor()
     {
         this.top=-1;
         console.log(this.top);
         this.stackarr;
      }
     
      //Stack is member function initalize a empty stack array 
      stack()
      { 
          this.stackarr=[];
        
      }

      // push is member function ,which push elements into stack variable.
      //checks for overflow.
      push(element)
     {
      
      this.top+=1;
      this.stackarr[this.top]=element;
     }
     
     /*pop--->which removes the elements from the stack array
     returns the deleted element*/
     pop()
     {
         if(this.top===-1)
         {
             console.log("Stack under flow");
             
         }

         var ele=this.stackarr[this.top];
         this.top-=1;
         return ele;
     }

    
     /*Preak -->function returns the top iteam,but it will not delete the element
      will not modify the stack.*/

      preak()
      {
          if(this.top===-1)
          {
              return null;
          }
          return this.stackarr[this.top];
      }

      /* isEmpty-->Tests to see  is stack is empty,takes no parameter
      retruns boolean value*/
      isEmpty()
      {
          if(this.top===-1) return true;
          else return false;
      }

      /*size -->function return number of elements in stack,takes no argumnet
      returns integer number.*/
      size()
      {
          if(this.isEmpty()) return 0;
          else return(this.top+1);
      }
      

 }