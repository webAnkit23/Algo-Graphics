

export function createGrid( rows , cols){

    let grid =[];

    for(let i=0;i<rows;i++){
          let row =[];

          for(let j=0;j<cols;j++){
                 row.push({
                    row:i,
                    col:j,
                    walls :[true ,true ,true ,true],
                    isVisited:false,
                    parent :null
                 })
          }
          grid.push(row);
    }
    return grid;
}