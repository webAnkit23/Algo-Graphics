import React, { useEffect,useRef } from 'react'
import { useMaze } from './MazeContext'
import {BFS} from './../../functions/MazeFunctions/MazeAlgorithms/BFS'
import {DFS} from './../../functions/MazeFunctions/MazeAlgorithms/DFS'
import {Dijkstra} from './../../functions/MazeFunctions/MazeAlgorithms/Dijkstra'
import {Astar} from './../../functions/MazeFunctions/MazeAlgorithms/AStar'
import { createGrid } from '../../functions/MazeFunctions/createMaze';
export default function MazeNavbar() {
    const {start ,inprocess ,setInprocess ,end ,maze,setMaze, mazeType,setMazeType,algorithm,setAlgorithm} = useMaze();
    const ref= useRef(null);
    const handleStart =async() =>{
      if(inprocess||!maze)return;
         setInprocess(true);
            const al ={
              BFS : BFS , 
              DFS : DFS,
              DIJKSTRA: Dijkstra,
              AStar : Astar
              
            }
         const {visitedNodes ,possible,curr}= al[algorithm](maze,start,end);
     
        
         await visitedNodeAnimation(visitedNodes);
          if(possible){
                    let path =[];
                    let current =curr;
                   
                    if(algorithm==='DIJKSTRA'){
                      ref.current = curr.distance;
                    }
                    while(current){
                        path.push(current);
                        maze[current.row][current.col].isPath = true;
                        current= maze[current.row][current.col].parent;
                       
                    }
                    await pathAnimation(path);
          }
          else{
              
          }
            
        setInprocess(false);
        const newMaze = maze.slice();
        setMaze(newMaze); 
    }

    const pathAnimation=async(path)=>{
      let left =1;
      let right = path.length-2;

      while(left<=right){
        let leftElement = document.getElementById(`rows-${path[left].row}&cols-${path[left].col}`);
        let rightElement = document.getElementById(`rows-${path[right].row}&cols-${path[right].col}`);
        leftElement.classList.remove("fill-animation");
        rightElement.classList.remove("fill-animation");
        leftElement.classList.add("pathGradient");
        rightElement.classList.add("pathGradient");
        left++;
        right--;
        await sleep(20);
      }
    }
    

    const visitedNodeAnimation =async(visitedNodes)=>{
            for(let i=0;i<visitedNodes.length;i++){
              if(start.row==visitedNodes[i].row&&start.col==visitedNodes[i].col)continue;
              if(end.row==visitedNodes[i].row&&end.col==visitedNodes[i].col){
                continue;
              }
                const span = document.getElementById(`rows-${visitedNodes[i].row}&cols-${visitedNodes[i].col}`);
                span.classList.add("fill-animation");
                await sleep(10);       
            }
    }
    const sleep =(delay)=>{
      return new Promise((resolve ,reject)=>{
          setTimeout(()=>{
              resolve();
          },delay)
      })
  }



    const handleReset =()=>{
    
      if(inprocess)return;
          for(let i =0;i<maze.length;i++){
               for(let j=0;j<maze[i].length;j++){
                const span = document.getElementById(`rows-${maze[i][j].row}&cols-${maze[i][j].col}`);
                span.classList.remove("fill-animation");
                span.classList.remove("pathGradient");

               }
          }
      setMaze(createGrid(start,end,21,41));
      setMazeType("Grid");
      ref.current=null;
    }

  return (
    <div className='flex flex-wrap justify-between gap-2 md:justify-normal md:gap-10'>
           
           <div>
            <p className=''>Create Maze</p>
            <select value={mazeType} className='w-[150px] rounded-sm focus:outline-none' disabled ={inprocess}  onChange={(e)=>setMazeType(e.target.value)}>
                <option>Grid</option>
                <option>Recursive division</option>
                <option>Binary Tree </option>
            </select>
           </div>
           <div>
            <p>Run Algorithm</p>
            <select value={algorithm}  className='w-[150px] rounded-sm focus:outline-none' disabled ={inprocess}  onChange={(e)=>setAlgorithm(e.target.value)}>
                <option>BFS</option>
                <option>DFS</option>
                <option>DIJKSTRA</option>
                <option>AStar</option>
            </select>
           </div>
          

           <div className='flex items-end gap-4'>
            <button disabled ={inprocess} onClick={handleStart} className={`p-1 ${inprocess?"opacity-45":""}  text-lg text-center w-[100px] h-[40px] bg-green-500 border-2 rounded-md shadow-sm`}>Start</button>
            <button disabled ={inprocess} onClick={handleReset} className={`p-1 ${inprocess?"opacity-45":""}  text-lg text-center w-[100px] h-[40px] bg-red-500 border-2 rounded-md shadow-sm`}>Reset</button>
           </div>
           <div className='text-lg font-semibold'>
               <p>Left click and drag for Walls</p>
               <p>Right click and drag for weights</p>
               {ref.current?<p>Minimum path cost : {ref.current}</p>:<></>}
           </div>
    </div>
  )
}
