const neighbours = [{row:-1 ,col:0},{row:1,col:0},{row:0,col:-1},{row:0 ,col:1}];

export function Dijkstra(grid,start,end){

    let visitedNodes = [];
    let queue =[];
    grid[start.row][start.col].distance = 0;
    grid[start.row][start.col].isVisited = true;
    queue.push({...start , distance :0});
    visitedNodes.push(start);

    while(queue.length){
            
          let minIndex = findMinimum(queue);

          let curr = queue[minIndex];
        
          queue.splice(minIndex,1);
          visitedNodes.push({row:curr.row ,col:curr.col});
          if(end.row===curr.row&&end.col===curr.col){
            return {visitedNodes , possible:true ,curr};
          }
          
          for(let i=0;i<4;i++){
            let nrow = curr.row+neighbours[i].row;
            let ncol = curr.col+neighbours[i].col;
            
            if(isValidCell(nrow ,ncol , grid)&&grid[nrow][ncol].distance>curr.distance+grid[nrow][ncol].weight){
                grid[nrow][ncol].parent ={row:curr.row , col :curr.col};
                grid[nrow][ncol].distance = curr.distance+grid[nrow][ncol].weight;
                queue.push({row:nrow ,col:ncol , distance:grid[nrow][ncol].distance})
            }
          }
        }

         return {visitedNodes,possible:false};

    }


    function isValidCell(r,c,grid){
        if(r<0||c<0||r>=grid.length||c>=grid[0].length||grid[r][c].isWall)return false;
        return true;
    }


    function findMinimum(queue){
        let min = Infinity;
        let minBoxIndex;
     
         queue.forEach((box,i)=>{
             if(box.distance<min){
                 minBoxIndex=i;
                 min = box.distance;
             }
         })
         return minBoxIndex;
     }