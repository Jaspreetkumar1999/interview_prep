   
class Node {
 constructor(value){
  this.value = value;
  this.next = null,
  this.prev = null
 }
}
class LinkedList {
    constructor(value){

        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length =1;
    }
    preappend(value){
        const newNode = {
            value: value,
            next: this.head,
            prev : null
           }
           this.head = newNode
           this.length++;
           return this;
    }
    append(value){
       const newNode = new Node(value)
       newNode.prev = this.tail
       this.tail.next =  newNode;
       this.tail = newNode;
       this.length++;
       return this;
    }
    printList(){
        const array = []
        let currentNode = this.head;
          while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next
          }
          console.log(array)
    }
    insert(index, value){
    //    this.printList()
    if(index >= this.length){
        return this.append(value)
    }
    else if (index === 0) {
                return   this.preappend(value);
             
           }
           else {
            const newNode = new Node(value)
            
            const leader = this.traverseToIndex(index-1)
            newNode.prev = leader;
            const holdingPointer = leader.next;
            holdingPointer.prev = newNode;
            leader.next = newNode;
            newNode.next = holdingPointer
            // console.log(this)
            this.length ++
           }
    }
    traverseToIndex(index){
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
        currentNode = currentNode.next
        counter++;
    }
    return currentNode;
    }
    delete(index){
        let leader = this.traverseToIndex(index-1)
        let temp = leader.next 
        temp.prev = leader.prev;
        leader.next = temp.next

        this.length--;
        // console.log(this)
        return leader
    }
    reverse(){
        if(!this.head.next){
            return this.head 
        }
        let first = this.head;
        this.tail = this.head;
        let second =  first.next;
        while(second){ 
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp
        } 
        this.head.next = null;
        this.head = first; 
    }
}
const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(50)
myLinkedList.preappend(4)
myLinkedList.insert(3,99)
myLinkedList.printList()
myLinkedList.delete(2)
myLinkedList.append(89)

myLinkedList.printList()
myLinkedList.reverse()
myLinkedList.printList()


// if (index === 0) {
//     this.prepend(value);
//     return this.printList();
//   }
 
// console.log(JSON.stringify(myLinkedList))

 