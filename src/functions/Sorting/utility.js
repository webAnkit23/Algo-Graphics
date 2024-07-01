export function compare(a,b,isAscendingSort){
    if(isAscendingSort){
          return a>b;
    }
    else{
         return a<b;
    }
}
export const sleep =(delay)=>{
return new Promise((resolve ,reject)=>{
  setTimeout(()=>{
      resolve();
  },delay)
})
}