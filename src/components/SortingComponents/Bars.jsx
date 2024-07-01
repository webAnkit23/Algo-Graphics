import React, { useMemo } from 'react'
import { useSorting } from '../../context/SortingContext'
export default function Bars() {

    const {bars,isRunning,sortingWay } = useSorting();

    let max = useMemo(()=>{
        return Math.max(...bars);
       },[bars]);

       function getComplexity(){
        if(sortingWay=='Merge Sort'||sortingWay=='Quick Sort'){
          return `O(NlogN)`;
        }
        else{
          return `O(N^2)`
        }
       }
  return (
    <div className='relative p-4'>
       <div className='mb-2 text-lg font-semibold'>{getComplexity()}</div>
        <div className='border-b-2 border-l-2 pl-3 gap-1 h-[400px] flex items-end'>
                 {
                   bars&& bars?.map((column,i) =>(
                        <span key={i} style={{height : `${400*column/max}px`}} id={`index-${i}`} className={`bar min-w-[4px] w-[30px] bg-red-500` }></span>
                    ))
                 }
        </div>
    </div>
  )
}
