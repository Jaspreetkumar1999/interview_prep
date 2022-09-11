class Graph {
    constructor(){
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }
    addVertex(node){
    this.adjacentList[node] = [];
    this.numberOfNodes++;
    }
    addEdge(node1, node2){
       this.adjacentList[node1].push(node2)
       this.adjacentList[node2].push(node1)
      return this
    }
    showConnections(){

    }
}
const myGraph = new Graph();
myGraph.addVertex('3')
myGraph.addVertex('2')

console.log(myGraph.addEdge('3','2'))