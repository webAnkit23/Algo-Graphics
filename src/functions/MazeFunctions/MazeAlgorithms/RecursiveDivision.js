const sleep =(delay)=>{
    return new Promise((resolve ,reject)=>{
        setTimeout(()=>{
            resolve();
        },delay)
    })
}


export async function recursiveDivision(maze,startRow,startCol,endRowIndex ,endColIndex,start,end){
    
    let verdiff = endRowIndex-startRow;
    let horizontaldiff = endColIndex -startCol;
    if(horizontaldiff>verdiff){
       await divideVertical(maze,startRow,startCol,endRowIndex ,endColIndex,start,end);
    }
    else{
       await divideHorizontal(maze,startRow,startCol,endRowIndex ,endColIndex,start,end);
    }

}


async function divideHorizontal(maze,startRow,startCol,endRowIndex ,endColIndex,start,end){
    console.log('h');
    if(endColIndex-startCol<=1||endRowIndex-startRow<=1)return;

    let randomRow = startRow+Math.floor(Math.random()*(endRowIndex-startRow-1)) +1;
    let randomCell =startCol +Math.floor(Math.random()*(endColIndex-startCol+1)) ;

    for(let i=startCol;i<=endColIndex;i++){
        if(i==randomCell||(i==start.col&&randomCell==start.row)||(i==end.col&&randomCell==end.row))continue;
        maze[randomRow][i].isWall = true;
        const element = document.getElementById(`rows-${randomRow}&cols-${i}`);
               element?.classList.add('wallAnimation');
              await sleep(30);
    }

   await recursiveDivision(maze,startRow,startCol,randomRow-1 ,endColIndex,start,end);

   await recursiveDivision(maze,randomRow+1,startCol,endRowIndex ,endColIndex,start,end);


}
async function divideVertical(maze,startRow,startCol,endRowIndex ,endColIndex,start,end){
 console.log('f');
 if(endColIndex-startCol<=1||endRowIndex-startRow<=1)return;


    let randomCol = startCol+Math.floor(Math.random()*(endColIndex-startCol-1)) +1;
    let randomCell =startRow +Math.floor(Math.random()*(endRowIndex-startRow +1)) ;
   
    for(let i=startRow ;i<=endRowIndex&&i<maze.length;i++){
        if(i==randomCell||(i==start.row&&randomCol==start.col)||(i==end.row&&randomCol==end.col))continue;

        
            console.log(randomCol);
               maze[i][randomCol].isWall = true;
               const element = document.getElementById(`rows-${i}&cols-${randomCol}`);
               element?.classList.add('wallAnimation');
              await  sleep(30);
        
    }
   await recursiveDivision(maze,startRow ,startCol ,endRowIndex ,randomCol-1 ,start,end);

    await recursiveDivision(maze,startRow ,randomCol+1 ,endRowIndex ,endColIndex ,start,end);

}






export async function UpdateBorderAsWalls(maze){
    //toprow
    for(let i=0;i<maze[0].length;i++){
        maze[0][i].isWall  =true;
       const element = document.getElementById(`rows-${0}&cols-${i}`);
       element.classList.add("wallAnimation");
       await sleep(5);
    }

    for(let i=0;i<=maze.length-1;i++){
        maze[i][maze[0].length-1].isWall  =true;
       const element = document.getElementById(`rows-${i}&cols-${maze[0].length-1}`);
       element.classList.add("wallAnimation");
     await sleep(5);
    }
    for(let i=maze[0].length-1;i>=0;i--){
        maze[maze.length-1][i].isWall  =true;
       const element = document.getElementById(`rows-${maze.length-1}&cols-${i}`);
       element.classList.add("wallAnimation");
       await sleep(5);
       
    }


    for(let i=maze.length-1;i>=0;i--){
        maze[i][0].isWall  =true;
       const element = document.getElementById(`rows-${i}&cols-${0}`);
       element.classList.add("wallAnimation");
     await sleep(5);
    }

}
   

  