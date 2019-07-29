let read = require('readline-sync');
class NODE {
    constructor(data) {
        //initalize the values when it invokes.
        this.data = data;
        this.next = null;
    } //end of constructur 
} //end of class

try {
    /* This class contains all functions of queue*/
    class singleQueue {
        constructor() 
        {
            this.front = null;
            this.rear = null;
        }

        /*add a item to queue from rear end.It requires an iteam,return nothing.*/
        enQueue(item) {

            let newnode = new NODE(item);
            if (this.front === null && this.rear === null) {
                this.front = newnode;
                this.rear = newnode;
            } else {
                this.rear.next = newnode;
                newnode.next = this.rear;
                this.rear = newnode;
                //console.log(newnode.data," inserted");
            }
        }


        /*dequeue removes the elements from front,returns the deleted element*/
        dequeue() {
            if (this.isEmpty()) {
                console.log("underflow");
                return;
            }
            this.temp = this.front;
            let rem = this.temp.data;
            this.front = this.temp.next;

            return rem;
        }

        display() {
            if (this.isEmpty()) {
                console.log("EMPTY");
            }
            console.log("Elements present ")
            this.temp = this.front;

            while (this.temp !== this.rear) {
                console.log(this.temp.data, " ")
                this.temp = this.temp.next;
            }
            console.log("\n");

        }
        /* isEmpty--->checks for element present,returns false if present else true.*/
        isEmpty() {
            if (this.front == this.rear) return true;
            else return false;
        }
        /*size -->Returns the size of the queue*/
        size() {
            if (this.isEmpty()) return 0;
            return (this.rear - this.front)

        }
        /*Sort function takes rank array as argument,compares the index of current data,
        if index of data is greater then next swap the data.*/
        sort(rank) {
            if (this.front == this.rear) {
                console.log("Under flow");
                return;
            } else {
                this.temp = this.front;

                while (this.temp != this.rear) {
                    this.current = this.temp.next;
                    while (this.current != this.rear) {
                        if (rank.indexOf(this.current.data.split(" ")[0]) > rank.indexOf(this.temp.data.split(" ")[0])) {
                            this.temp1 = this.temp.data;
                            this.temp.data = this.current.data;
                            this.current.data = this.temp1;
                        }
                        this.current = this.current.next;
                    }
                    this.temp = this.temp.next;
                }
            }
        }
    }

    module.exports = singleQueue;
} catch (e) {
    console.log(e);
}