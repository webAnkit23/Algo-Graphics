export function createBars(size){
 let arr =[];
 for(let i=0;i<size;i++){
     arr.push(Math.floor(Math.random()*50) + Math.floor(Math.random()*50));
 }
 return arr;
}