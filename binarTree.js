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



function BinaryTreeNode(value){
this.value = value;
this.left =null;
this.right = null;
} 


