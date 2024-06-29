const neighbours = [{row:-1 ,col:0},{row:1,col:0},{row:0,col:-1},{row:0 ,col:1}];
const shuffleneighbours =(neighbours)=>{
    const swap =(start,end)=>{
        let temp =neighbours[start];
        neighbours[start] =neighbours[end];
        neighbours[end] = temp;

}
     for(let i=0;i<=neighbours.length/2;i++){
        let randomIndex = Math.floor(Math.random()*neighbours.length);
        swap(i,randomIndex);
         
     }
}
export function BFS(grid,start,end){
  
    let visitedNodes = [];
    let queue = [];
    queue.push(start);
    grid[end.row][end.col].isWall = false;
    grid[start.row][start.col].distance = 0;
    grid[start.row][start.col].isVisited = true;
    while(queue.length){
        let curr = queue.shift();
         visitedNodes.push(curr);
        if(curr.row==end.row&&curr.col==end.col){
            return {visitedNodes ,possible:true,curr};
        }
        shuffleneighbours(neighbours);
        for(let i=0;i<4;i++){
            let nrow = curr.row+neighbours[i].row;
            let ncol = curr.col+neighbours[i].col;
             
            if(isValid(nrow,ncol ,grid)){
                if(curr.row==end.row&&curr.col==end.col){

                    return {visitedNodes ,possible:true ,curr};
                };
                  grid[nrow][ncol].isVisited = true;
                  grid[nrow][ncol].distance = grid[curr.row][curr.col].distance+1;
                  grid[nrow][ncol].parent = {...curr};
                 
                  queue.push({row:nrow,col:ncol});
            }
            else{
                continue;
            }
        }

    }
    return {visitedNodes ,possible :false };
}
function isValid(r,c,grid){
    if(r<0||c<0||r>=grid.length||c>=grid[0].length||grid[r][c].isVisited||grid[r][c].isWall)return false;
    return true;
}