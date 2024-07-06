import { sleep } from "../Sorting/utility";

 
const neighbours = [{row:-1 ,col:0},{row:1,col:0},{row:0,col:-1},{row:0 ,col:1}];
 function findneighbours(grid ,current){
        let ans =[];
    for(let i=0;i<neighbours.length;i++){
        let nrow = current.row +neighbours[i].row;
        let ncol = current.col + neighbours[i].col;
        if(nrow>=0&&ncol>=0&&nrow<grid.length&&ncol<grid[0].length&&!grid[nrow][ncol].isVisited){
                  ans.push({row:nrow,col:ncol});
        }
    }
    return ans;

  }
  function breakWall(current,next,grid){
   
    const currentElement = document.getElementById(`-${current.row}&-${current.col}`);
    const nextElement = document.getElementById(`-${next.row}&-${next.col}`);
        if(current.row==next.row){
              if(current.col>next.col){
                    grid[current.row][current.col].walls[3] =false;
                    grid[next.row][next.col].walls[1] = false;
                    currentElement.classList.add('left');
                    nextElement.classList.add('right');
              }
              else{
                grid[current.row][current.col].walls[1] =false;
                grid[next.row][next.col].walls[3] = false;
                currentElement.classList.add('right');
                nextElement.classList.add('left');
              }
        }
        else{
             if(current.row>next.row){
                grid[current.row][current.col].walls[0] =false;
                grid[next.row][next.col].walls[2] = false;
                currentElement.classList.add('top');
                nextElement.classList.add('bottom');
             }  
             else{
                grid[current.row][current.col].walls[2] =false;
                grid[next.row][next.col].walls[0] = false;
                currentElement.classList.add('bottom');
                nextElement.classList.add('top');
             }

        }
  }

export async function runTracking(grid,current){
    
    if(current==null)return;
    grid[current.row][current.col].isVisited = true;
    const element = document.getElementById(`-${current.row}&-${current.col}`);
      element.classList.add('currentNode');
     
      await sleep(20);
     let possibleCells = findneighbours(grid,current);
     
     element.classList.add('visitedNOde');
     if(possibleCells.length>0)
     {
        let randomIndex = Math.floor(Math.random()*(possibleCells.length));
        let next = possibleCells[randomIndex];
        breakWall(current,next,grid);
        grid[next.row][next.col].parent = current;
       await runTracking(grid,next); 
     }
     else{
        element.classList.remove('currentNode');
        if(grid[current.row][current.col].parent==null)return;
        const parentElement = document.getElementById(`-${grid[current.row][current.col].parent.row}&-${grid[current.row][current.col].parent.col}`);
      parentElement.classList.remove('visitedNOde');
        parentElement.classList.add('currentNode');
        await runTracking(grid,grid[current.row][current.col].parent);
     }
   
}