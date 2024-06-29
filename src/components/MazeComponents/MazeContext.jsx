import { createContext, useContext, useEffect, useRef, useState } from "react";

import {createGrid,updateMaze} from './../../functions/MazeFunctions/createMaze'
const mazeContext = createContext();

export const useMaze = () => useContext(mazeContext);



export const MazeProvider =({children})=>{
   const [mazeType ,setMazeType] = useState("Grid");
   const [algorithm ,setAlgorithm] = useState("BFS");
  
   const [maze,setMaze] = useState(null);
  const [start ,setStart] = useState({row:1 ,col:1});
  const [end ,setEnd] = useState({row:19 ,col:39});
   const isRunning = useRef(false);
   const [inprocess , setInprocess] = useState(false);

   useEffect(()=>{
        

   (async()=>{
         isRunning.current = true;
         setInprocess(true);
         if(mazeType=='Grid'){
                 setMaze(createGrid(start ,end,21,41));
         }
         else{
                await updateMaze(maze,mazeType,start,end);
                   let newMaze = maze.slice();
                   setMaze(newMaze); 
        }
        isRunning.current =false;
        setInprocess(false);
        })()
        
   },[mazeType]);

    return <mazeContext.Provider value={{inprocess , setInprocess,mazeType,setMazeType ,algorithm,setAlgorithm,maze,setMaze,start,setStart,end,setEnd,isRunning}}>
               {children}
        </mazeContext.Provider>
}



