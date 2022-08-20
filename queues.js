class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class queue {
    constructor(){
        this.top = null;
        this.bottom =null;
        this.length = 0
    }
    first(){
      return this.bottom;
    }
    push(value){
         const newNode = new Node(value)
         if(this.length=== 0){
            this.top = newNode;
            this.bottom = newNode;
        }else{
            // console.log(this)
            const holdingPointer = this.bottom;
            this.bottom = newNode;
            this.bottom.next = holdingPointer;
            
            
        }
        this.length ++;
            return this
        
    }
    remove(){
        if(this.length ===1){
            this.bottom = null;
        }
      const holdingPointer = this.bottom;

      this.bottom = this.bottom.next;
      this.length --;
      return holdingPointer.value;

    }
}

const myQueue = new queue()
myQueue.push('first')
myQueue.push('second')
myQueue.push('third')
console.log(myQueue.remove())
console.log(myQueue)