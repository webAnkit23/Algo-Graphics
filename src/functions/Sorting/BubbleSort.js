import { compare,sleep } from "./utility";


export async function bubbleSort(bars , isAscendingSort){
 let max =Math.max(...bars);
    for(let i=0;i<bars.length;i++){

        for(let j=0;j<bars.length-i-1;j++){

            const firstElement = document.getElementById(`index-${j}`);
            const secondElement = document.getElementById(`index-${j+1}`);
            firstElement.classList.add('activeBar');
            secondElement.classList.add('activeBar');
           await sleep(20);
            if(compare(bars[j] ,bars[j+1] ,isAscendingSort)){
                  
                 let h1= bars[j];
                 let h2 = bars[j+1];
               
                firstElement.style.height = `${400*h2/max}px`;
                 secondElement.style.height = `${400*h1/max}px`;
                 bars[j+1] =h1;
                 bars[j] = h2;
                 await sleep(10);
            }
            
            firstElement.classList.remove('activeBar');
            secondElement.classList.remove('activeBar');
        }
        const element = document.getElementById(`index-${bars.length-i-1}`);
        element.classList.add('sortedBar');

    }
}