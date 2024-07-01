import { createContext, useContext ,useState, useEffect, useCallback } from "react";
import { createBars } from "../functions/Sorting/createBars";


const sortingContext = createContext();

export const useSorting = ()=>useContext(sortingContext);


export const SortingProvider =({children})=>{
   const [bars ,setBars] = useState([]);
   const [sortingWay ,setSortingWay] = useState('Quick Sort');
    const [isRunning ,setIsRunning] = useState(false);
    const [isAscending ,setisAscending] = useState(false);
    
    let reshuffle = useCallback(function reshuffle(){
          const arr =createBars(50);
          setBars(arr); 
     },[]);
     
     useEffect(()=>{
        const arr =createBars(50);
        setBars(arr); 
     },[]);

    return <sortingContext.Provider value={{reshuffle ,isAscending,setisAscending ,bars ,setBars,sortingWay ,setSortingWay,isRunning ,setIsRunning}}>
        {children}
    </sortingContext.Provider>
}