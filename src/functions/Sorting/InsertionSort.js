import { sleep,compare } from "./utility";

export async function insertionSort(bars , isAscending){
   let max =Math.max(...bars);
    for(let i=0;i<bars.length-1;i++){
        const element = document.getElementById(`index-${i}`);
        for(let j=i+1;j>0;j--){  
             const firstElement = document.getElementById(`index-${j}`);
             const secondElement = document.getElementById(`index-${j-1}`);
             firstElement.classList.add('activeBar');
             secondElement.classList.add('activeBar');
             await sleep(30);
            if(compare(bars[j-1],bars[j],isAscending)){
                 firstElement.style.height= `${400*bars[j-1]/max}px`;
                 secondElement.style.height= `${400*bars[j]/max}px`;
                 firstElement.classList.add('swappedBar');
                 secondElement.classList.add('swappedBar');
                await sleep(30);
                let temp = bars[j];
                bars[j] =bars[j-1];
                bars[j-1] =temp;
                firstElement.classList.remove('swappedBar');
                secondElement.classList.remove('swappedBar');
                firstElement.classList.remove('activeBar');
                secondElement.classList.remove('activeBar');
            }
            else{
                firstElement.classList.remove('activeBar');
                secondElement.classList.remove('activeBar');
                break;
            }
        }
    }
}