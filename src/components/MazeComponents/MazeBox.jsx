import React, { useState } from 'react'
import { useMaze } from './MazeContext'
import { addWeight, createNewGrid } from '../../functions/MazeFunctions/createMaze';

export default function MazeBox() {
    const {maze,setMaze,start ,end,inprocess} = useMaze();
    const [mouseDown , setMouseDown] = useState(false);
    const [contextMenu ,setContextMenu] = useState(false);
    const handleMouseDown =(row ,col,e)=>{


      if(inprocess||maze[row][col].isStart||maze[row][col].isEnd)return;
        if(e.button==0){
        setMouseDown(true);
         setMaze(createNewGrid(maze , row,col));
        }
        else{
          e.preventDefault();
          setContextMenu(true);
          if(!maze[row][col].isWall){
          setMaze(addWeight(maze,row,col));
          }
        }
      
    }
   function handleMouseEnter(row,col){
    if(inprocess||maze[row][col].isStart||maze[row][col].isEnd)return;
       if(mouseDown){
        setMaze(createNewGrid(maze , row,col));
        return;
       }
       if(contextMenu&&!maze[row][col].isWall){
          setMaze(addWeight(maze,row,col))
       }

   }
   function handleMouseUp(row,col){
    if(inprocess||maze[row][col].isStart||maze[row][col].isEnd)return;
    setMouseDown(false);
    setContextMenu(false);
       
   }
   function handleLeave(){
    if(mouseDown){
      setMouseDown(false);
      setContextMenu(false);
    }
   }
  return (
    <div className='flex flex-col items-center justify-center mt-5 mb-20 rounded-sm'  onMouseLeave={handleLeave} >
           {maze?.map((row ,i)=>(
              <div key={i} className='flex'>
              {row.map((ele,j)=>{
                return <span key={j} 
                id={`rows-${i}&cols-${j}`}
                onMouseEnter={(e) =>handleMouseEnter(i,j)}
                 onMouseDown={(e)=>handleMouseDown(i,j,e)} 
                 onMouseUp={()=>handleMouseUp(i,j)} 
                 className={`${i==maze.length-1?'border-b-2':""} border-white ${j==maze[i].length-1?'border-r-2':""} ${i==start.row&&j==start.col?"bg-green-500" :""} ${i==end.row&&j==end.col?"bg-red-500":""} ${ele.isWall?"bg-black":""} md:h-[15px] lg:h-[25px] lg:w-[25px] select-none flex items-center text-center justify-center h-[10px] w-[10px] text-[10px] border-l-2 border-t-2 md:w-[15px]`}>{ele.weight==1?"":ele.weight}
                 </span>
              })}
              </div>
           )
           )}
    </div>
  )
}
