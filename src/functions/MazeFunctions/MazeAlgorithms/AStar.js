const neighbours = [{row:-1 ,col:0},{row:1,col:0},{row:0,col:-1},{row:0 ,col:1}];
export function Astar(grid,start,end){
    
    let visitedNodes =[];
    let queue =[];
    
    grid[start.row][start.col].distance =0;
    queue.push({...start , manhattanDis : 0});

    while(queue.length){
           let minDisIndex = findMin(queue);
           let curr = queue[minDisIndex];
           queue.splice(minDisIndex,1);
         visitedNodes.push({row:curr.row ,col:curr.col});
         if(curr.row==end.row&&curr.col==end.col){
            return {visitedNodes ,possible:true,curr};
        }
        for(let i=0;i<4;i++){
            let nrow = curr.row+neighbours[i].row;
            let ncol = curr.col+neighbours[i].col;
             
            if(isValidCell(nrow,ncol ,grid)&&grid[nrow][ncol].distance> Math.abs(nrow-end.row)+Math.abs(ncol-end.col)){
                    grid[nrow][ncol].parent = {row:curr.row ,col:curr.col};
                    grid[nrow][ncol].distance =Math.abs(nrow-end.row)+Math.abs(ncol-end.col);
                    queue.push({row:nrow ,col:ncol ,manhattanDis : Math.abs(nrow-end.row)+Math.abs(ncol-end.col)});
            }
        }
    }

    function findMin(queue){
        let minIndex =0;
        let dis = Infinity;
        for(let i=0;i<queue.length;i++){
            if(queue[i].manhattanDis<dis){
                minIndex =i;
                dis = queue[i].manhattanDis;
            }
        }
        return minIndex;
    }
    return {visitedNodes ,possible:false};
}

function isValidCell(r,c,grid){
    if(r<0||c<0||r>=grid.length||c>=grid[0].length||grid[r][c].isWall)return false;
    return true;
}