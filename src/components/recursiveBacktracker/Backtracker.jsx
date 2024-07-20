import React, { useEffect ,useState} from 'react'
import { createGrid } from '../../functions/backtracker/createGrid';
import { runTracking } from '../../functions/backtracker/dfsbacktracker';

export default function Backtracker() {
    const [grid ,setGrid] = useState([]);
    const [running,setRunning] = useState(false);
  
async function start(){
    if(running)return;
    setRunning(true);
  await runTracking(grid ,{row:Math.floor(Math.random()*20),col:Math.floor(Math.random()*35)});
  const newgrid = grid.slice();
  setGrid(newgrid);
  setRunning(false);
}

function reset(){
    if(running)return;

    for(let i=0;i<grid.length;i++){

        for(let j=0;j<grid[i].length;j++){
            const element = document.getElementById(`-${i}&-${j}`);
            console.log(element);
            element.classList.remove('visitedNOde');
            element.classList.remove('currentNode');
            element.classList.remove('top');
            element.classList.remove('right');
            element.classList.remove('left');
            element.classList.remove('bottom');
        }
    }
    setGrid(createGrid(25,50));
}

    useEffect(()=>{
            setGrid(createGrid(25,50));
    },[]);
  return (
    <div className='mt-5'>


          <div className='p-3 bg-green-500'>
            <p className='text-2xl font-semibold'>Recursive Backtracker</p>
            <div className='flex gap-2'>
            <button disabled={running} className='p-1 pl-3 pr-3 text-white bg-gray-500 rounded' onClick={start}>Start</button>
            <button disabled={running} className='p-1 pl-3 pr-3 text-white bg-red-500 rounded'  onClick={reset}>Reset</button>
            </div>
            
        

          </div>
         
               <div className='flex flex-col mt-4'>
                {grid.map((row,i)=>(
                     <div key={i} className='flex'> 
                      {row.map((element ,j)=>{
                              return <span key={j} id={`-${i}&-${j}`} className={`box h-[20px] border-2 border-black w-[20px]`}>{}</span>
                        })}
                     
                    </div> 
                ) )}
               </div>
       </div>
  )
}
