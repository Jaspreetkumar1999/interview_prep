class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom =null;
        this.length = 0
    }
    peek(){
     return this.top
    }
    push(value){
    const newNode = new Node(value);
    if(this.length=== 0){
        this.top = newNode;
        this.bottom = newNode;
    }else{
         const holdingPointer = this.top;
         this.top = newNode;
         this.top.next = holdingPointer;
    } 
    this.length ++;
    return this
    }
    pop(){
    
     if(this.length ===0){
        return this.top
     }
     else{
        if(this.length ===1){
            this.bottom = null;
        }
        const holdingPointer = this.top;
        this.top = holdingPointer.next;
        this.length --;
        return holdingPointer.value;
     }
    }
}

const myStack = new Stack();
myStack.push('Google')
// myStack.push('Apple')
// myStack.push('Apple1')
// myStack.push('Apple2')

console.log(myStack.pop())
console.log(myStack.pop())

console.log(myStack)
