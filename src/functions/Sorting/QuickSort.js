import { sleep ,compare } from "./utility";

let max =0;
let bar=[5,6,4,7,11,232,211,8,9,3];
export async function quickSort(bars,isAscendingSort){
      
       max = Math.max(...bars);
    await sorting(bars,0,bars.length-1,isAscendingSort);
     
}

async function sorting(bars ,low ,high,isAscendingSort){
 
    if (low >= high ||low<0||high>=bars.length) return;
    
    let start =low ;
    let end = high;
    let pivotIndex = Math.floor((start+end)/2);
    let pivot = bars[pivotIndex];
    let pivotElement = document.getElementById(`index-${pivotIndex}`);
    while(start<=end){
      
        pivotElement.style.backgroundColor = 'yellow'
       
          while(compare(pivot,bars[start],isAscendingSort)){
            let firstElement = document.getElementById(`index-${start}`);
            firstElement.classList.add('activeBar');
           await sleep(30);
            start++;
            firstElement.classList.remove('activeBar');
          }
          while(compare(bars[end],pivot,isAscendingSort)){
            let secondElement = document.getElementById(`index-${end}`);
            secondElement.classList.add('activeBar');
           await sleep(30);
            end--;
            secondElement.classList.remove('activeBar');
          }
         
          if(start<=end){     
            
            let firstElement = document.getElementById(`index-${start}`);
            let secondElement = document.getElementById(`index-${end}`);
              
              firstElement.style.backgroundColor = 'green';
              secondElement.style.backgroundColor = 'green';
              await sleep(30);
            firstElement.style.height = `${400*bars[end]/max}px`;
            secondElement.style.height = `${400*bars[start]/max}px`;
           await sleep(50);
            let temp = bars[start];
             bars[start] = bars[end];
             bars[end]  =temp;
             start++;
             end--;
             firstElement.style.backgroundColor = 'red';
             secondElement.style.backgroundColor = 'red';
          }  
         
        
    }
    pivotElement.style.backgroundColor = 'red'; 
    await sorting(bars ,low ,end,isAscendingSort);
    await sorting(bars ,start,high,isAscendingSort);
}