import React, { useEffect } from 'react'
import { useSorting } from '../../context/SortingContext'
import { selectionSort } from '../../functions/Sorting/SelectionSort';
import { MergeSort } from '../../functions/Sorting/MergeSort';
import { bubbleSort } from '../../functions/Sorting/BubbleSort';
import { quickSort } from '../../functions/Sorting/QuickSort';
import { insertionSort } from '../../functions/Sorting/InsertionSort';

export default function SortingNavbar() {

    const {reshuffle,setIsRunning,isRunning,bars,setBars ,isAscending ,setisAscending,sortingWay ,setSortingWay} = useSorting();

    const handleStart = async()=>{
      if(isRunning)return;
       setIsRunning(true);

       if(sortingWay ==='Merge Sort'){
              await MergeSort(bars ,true);
       }
       else if(sortingWay ==='Insertion Sort'){
              await insertionSort(bars,isAscending);
       }
       else if(sortingWay =="Quick Sort"){
           await quickSort(bars ,isAscending);
       }
       else if(sortingWay=="Bubble Sort"){
         await bubbleSort(bars ,isAscending);
       }
       else{
          await selectionSort(bars,isAscending);
       }
      
     const updatedBars=[...bars];
     setBars(updatedBars);
     setIsRunning(false);

    }
   

    const handleReset =()=>{
      if(isRunning)return;
      for(let i=0;i<bars.length;i++){
        const element = document.getElementById(`index-${i}`);
        element.classList.remove('sortedBar');
      }
      reshuffle();
    }
  return (
    <div className='flex flex-wrap gap-5 p-2 m-2 mt-2 bg-red-600 h-fit'>
            <div className='flex flex-col gap-2'>
            <p className='text-white'>Sorting type</p>
            <select value={sortingWay}  className='w-[150px] rounded-sm focus:outline-none' disabled ={isRunning}  onChange={(e)=>{setSortingWay(e.target.value)}}>
                <option>Merge Sort</option>
                <option>Quick Sort</option>
                <option>Insertion Sort</option>
                <option>Bubble Sort</option>
                <option>Selection Sort</option>
            </select>
           </div>
          {sortingWay!=="Merge Sort"&& <div className='flex items-center self-end gap-2 text-white'>
            <label>Ascending</label>
                <input disabled ={isRunning} className='h-[30px] w-[30px] rounded-sm' type='checkbox' value={isAscending} onChange={()=>setisAscending((prev) => !prev)}/>
           </div>}
        <button disabled ={isRunning} className='self-end w-16 h-8 bg-green-500 border-2 rounded-md' onClick={handleStart}>Start</button>
        <button disabled ={isRunning} className='self-end w-24 h-8 bg-blue-600 border-2 rounded-md' onClick={reshuffle}>Re-shuffle</button>
        <button disabled ={isRunning} className='self-end h-8 bg-gray-500 border-2 rounded-md w-14' onClick={handleReset}>Reset</button>

     </div>

  )
}
