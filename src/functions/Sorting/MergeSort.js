import { sleep,compare } from "./utility";


export async function MergeSort(bars ,isAscendingSort){

    let start =0;
    let end = bars.length ;
    
   await sorting(bars,start,end,isAscendingSort);
    
    
}
async function sorting(arr ,start ,end,isAscendingSort){
    if(end-start==1)return;

    let mid =Math.floor((start+end)/2);
   await sorting(arr,start,mid,isAscendingSort);
   await sorting(arr,mid,end,isAscendingSort); 
   await merge(arr ,start,mid,end,isAscendingSort);     
}

async function merge(arr ,start ,mid ,end,isAscendingSort){
    let newarr = [];
    let max = Math.max(...arr);
    let i=start;
    let j=mid;
    while(i<mid&&j<end){
        
      const firstElement=  document.getElementById(`index-${i}`);
      const secondElement= document.getElementById(`index-${j}`);
      firstElement.classList.add('activeBar');
      secondElement.classList.add('activeBar');
        await sleep(30);
            if(arr[i]<arr[j]){
                     newarr.push(arr[i]);
                i++;
        }
        else{
             newarr.push(arr[j]);
             j++;
        } 
        
        
         firstElement.classList.remove('activeBar');
         secondElement.classList.remove('activeBar');

    }

    while(i<mid){
        newarr.push(arr[i]);
        i++;
    }
    while(j<end){
        newarr.push(arr[j]);
        j++;
    }

    for(let k=0;k<newarr.length;k++){
            const element =document.getElementById(`index-${k+start}`);
            element.style.height = `${400*newarr[k]/max}px`;
            element.classList.add('swappedBar');
            await sleep(20);
            element.classList.remove('swappedBar');
    
              arr[start+k] = newarr[k];
     }
    
}