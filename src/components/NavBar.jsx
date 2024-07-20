import React, { useEffect } from 'react'
  const arr =[[1,0,1,1,0,0,0,0,1],[0,1,1,0,1,1,0,1,0],[1,1,0,0,0,1,0,0,1]];
export default function NavBar() {

    useEffect(()=>{   
      async function runMaze(){
            for(let i=0;i<arr.length;i++){
                  for(let j=0;j<arr[i].length;j++){
                           const span= document.getElementById(`row-${i}-col-${j}`);
                             span.classList.add(arr[i][j]==1?"bg-white" :"bg-black");
                              await sleep();
                              if(i==arr.length-1&&j==arr[i].length-1){
                                revertBack();
                              }
                                
                  }
            }
        }
        async function revertBack(){
            for(let i=arr.length-1;i>=0;i--){
                for(let j=arr[i].length-1;j>=0;j--){
                         const span= document.getElementById(`row-${i}-col-${j}`);
                           span.classList.remove(arr[i][j]==1?"bg-white" :"bg-black");
                            await sleep();
                            if(i==0&&j==0){
                              runMaze();
                        }            
                }
          }
        }
        runMaze();
    },[]);

    const sleep =()=>{
        return new Promise((resolve ,reject)=>{
            setTimeout(()=>{
                resolve();
            },200)
        })
    }
    
  return (
    <div className='container-full bg-green-500 shadow-lg min-h-[70px] h-fit p-2'>
        <div className='flex justify-between h-full flex-nowrap md:pl-5 md:pr-5'>
            <h1 className='text-blue-700 md:text-[30px] text-[25px] font-semibold'>Algorithm visualizer</h1> 
            <button className='h-[40px] border-2 font-semibold  text-white rounded bg-gray-500 mt-2 p-2'><a href='https://suduko-lac.vercel.app'>Suduko Solver</a> </button> 
             <div>
                {arr.map((row,i)=>(
                      <div key={i} className='h-[12px]'>
                           {row.map((ele,j)=>{
                            return <span id={`row-${i}-col-${j}`} className={` w-[20px] h-[12px] inline-block `} key={j}>{}</span>
                           })}
                      </div>
                ))}
             </div>
        </div>
    </div>
  )
}
