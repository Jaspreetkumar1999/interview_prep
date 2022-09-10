/* Number of nodes in tree by level
L 0 : 2^0 =1
L1 : 2^1 = 2
L3 : 2^2 = 4
L3 : 2^3 = 8

number of nodes = 2^n-1; 2^3 -1 = 7
     n
    /\
   n  n
   /\  /\
   n n n n

   
 */



class BinaryTreeNode{

  constructor(value) {
    this.value = value;
    this.left =null;
    this.right = null;
  }

// console.log(this)
} 

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(value){
  //  console.log(value)
   const node = new BinaryTreeNode(value)
  //  console.log(node)
   if(!this.root){

    this.root = node
   }else{
    let currentNode = this.root;
    while(true){
      if(value < currentNode.value){
        if(!currentNode.left){
          currentNode.left = node;
          return this
        }
        currentNode = currentNode.left;
      }else{
        if(!currentNode.right){
          currentNode.right = node;
          return this
        }
        currentNode = currentNode.right
      }
    }
  
   }
   
  }
  lookup(value){
    while(true){
      // console.log(this.root)
      if(!this.root){
      return "Not Found"
      }
      if(this.root.value == value){
        return this.root.value
      }
      if(this.root.value > value){
          this.root = this.root.left
      }
      this.root = this.root.right
      // console.log(this.root)
    }
    
  }
}

const tree = new BinarySearchTree();
tree.insert(6)
tree.insert(4)
tree.insert(10)
tree.insert(7)
console.log(tree.lookup(10))



