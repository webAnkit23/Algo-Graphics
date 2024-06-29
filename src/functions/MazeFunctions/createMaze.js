
import {BinaryTreeMaze} from './MazeAlgorithms/BinaryTreeMaze';
import {recursiveDivision,UpdateBorderAsWalls} from './MazeAlgorithms/RecursiveDivision'

export function createGrid( start ,end,rows ,cols){

    let grid =[];
    for(let i=0;i<rows;i++){
        let row =[];
        for(let j=0;j<cols;j++){
            row.push({
                row:i,
                col:j,
                parent:null,
                isPath:false,
                distance : Infinity,
                isWall :false,
                hasWeight : false,
                isStart : (i==start.row&&j==start.col),
                isEnd: (i==end.row&&j==end.col),
                isVisited:false,
                weight : 1
            })
        }
        grid.push(row);
    }
    return grid;
}
export const createNewGrid =(oldGrid , row ,col)=>{
    const updatedGrid = oldGrid.slice();
    updatedGrid[row][col] = {
        ...oldGrid[row][col],
        isWall : !oldGrid[row][col].isWall,
        hasWeight:false,
        weight:1
    }
    return updatedGrid;
}

export const addWeight =(oldGrid,row,col)=>{
    const updatedGrid = oldGrid.slice();
    updatedGrid[row][col] = {
        ...oldGrid[row][col],
        hasWeight : true,
        weight : Math.floor(Math.random()*40)
    }
    return updatedGrid;
}

export async function updateMaze(maze,mazeType,start,end){
      
     if(mazeType==="Binary Tree"){
        await BinaryTreeMaze(maze ,start,end);
     }
     if(mazeType==="Recursive division"){
       
        await UpdateBorderAsWalls(maze);
        await recursiveDivision(maze ,1,1,maze.length-2,maze[0].length-2 ,start ,end );
     }
    
        
}








     





function sleep(delay){
    return new Promise((resolve ,reject)=>{
        setTimeout(()=>{
            resolve();
        },delay)
    })
}