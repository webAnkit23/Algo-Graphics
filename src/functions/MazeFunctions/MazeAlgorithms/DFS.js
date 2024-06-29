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
export function DFS(grid,start,end){

    let visitedNodes =[];
    grid[start.row][start.col].isVisited = true;
       
    if(traversal(start,end)){
        return {visitedNodes , possible:true ,curr:end};
    }
    else{
        return {visitedNodes ,possible:false,curr:end};
    }
       function traversal(start ,end){
            if(start==null||null)return;
            grid[start.row][start.col].isVisited = true;
            visitedNodes.push(start);
            if(start.row===end.row&&start.col===end.col){
                return true;
            }
         //  shuffleneighbours(neighbours);
            for(let i=0;i<4;i++){
                let nrow = start.row+neighbours[i].row;
               let ncol = start.col+neighbours[i].col;
               if(isValid(nrow,ncol,grid)){
                    grid[nrow][ncol].parent = {...start};

                    let ans = traversal({row:nrow,col:ncol},end);
                    if(ans)return true;
               }
            }

            return false;
       }

}
function isValid(r,c,grid){
    if(r<0||c<0||r>=grid.length||c>=grid[0].length||grid[r][c].isVisited||grid[r][c].isWall)return false;
    return true;
}

