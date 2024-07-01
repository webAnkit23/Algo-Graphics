
import { compare,sleep } from "./utility";
export async function selectionSort(bars,isAscendingSort){
   
    let size= bars.length;
    let max = Math.max(...bars);
    for(let i=0;i<size;i++){
        const firstElement = document.getElementById(`index-${i}`);
        firstElement.classList.add('activeBar');
        for(let j=i+1;j<size;j++){
             const secondElement = document.getElementById(`index-${j}`);
             secondElement.classList.add('activeBar');
             await sleep(10);
             if(compare(bars[i],bars[j] ,isAscendingSort)){
                
                  let h1 = bars[i];
                  let h2=bars[j];
                  firstElement.style.height = ` ${400*h2/max}px`;
                  secondElement.style.height = `${400*h1/max}px`;
                   let temp = bars[i];
                   bars[i] =bars[j];
                   bars[j] = temp;
                  
             }
             secondElement.classList.remove('activeBar');    
        }
        firstElement.classList.remove('activeBar');
        firstElement.classList.add('sortedBar');
    }
  
}