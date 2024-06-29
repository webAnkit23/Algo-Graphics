const sleep =(delay)=>{
    return new Promise((resolve ,reject)=>{
        setTimeout(()=>{
            resolve();
        },delay)
    })
}

export async function BinaryTreeMaze(maze ,start ,end){
    for(let i=0;i<maze.length;i++){
        for(let j=0;j<maze[i].length;j++){
     if((i==start.row&&j==start.col)||(i==end.row&&j==end.col)){
         continue;
        }
           
        if(i%2==0 || j%2==0){
                maze[i][j].isWall = true;
               const element=  document.getElementById(`rows-${i}&cols-${j}`);
               element.classList.add("wallAnimation");
               await sleep(1);
            }
        }
    }


    for(let row=1;row<maze.length;row+=2){
        for(let col=1;col<maze[row].length;col+=2){

        if(row===maze.length-2&&col===maze[0].length-2)continue;

        if(row===maze.length-2){
            await removeWall(maze ,row ,col ,1);
        }
       else if(col===maze[0].length-2){
           await removeWall(maze ,row ,col , 0);
        }

        else{
           let r =Math.random()<0.5?1:0;
           
           await removeWall(maze ,row ,col ,r);
        }
    }
}
} 
async function removeWall(maze , row ,col,right ){
    
       if(right&&maze[row][col+1]){
              maze[row][col+1].isWall = false;
             const element = document.getElementById(`rows-${row}&cols-${col+1}`);
             element.classList.remove("wallAnimation");
       }
      else if(maze[row+1][col]){
        maze[row+1][col].isWall = false;
        const element = document.getElementById(`rows-${row+1}&cols-${col}`);
  
        element.classList.remove("wallAnimation");
      }
      else{
        maze[row][col].isWall = false;
        const element = document.getElementById(`rows-${row}&cols-${col}`);
     
        element.classList.remove("wallAnimation");
      }

        await sleep(1);    

}