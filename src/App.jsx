
import './App.css'
import NavBar from './components/NavBar'
import MazePage from './components/MazeComponents/MazePage'
import SortingPage from './components/SortingComponents/SortingPage'
function App() {
  return (
    
    <div>
       <NavBar />
       <div className='p-2 mt-3 md:p-5'>
            <div>
              <h1 className='md:text-[40px] sm:text-[30px] text-[20px] text-semibold text-white'>An algorithm must be seen to be believed</h1>
              <span className='w-full h-[1px] bg-red border-[1px] inline-block'></span>
            </div>


           <MazePage />
            <SortingPage />

            <div className='text-center mt-20 border-2 text-[30px] font-semibold text-red-500'>More Algorithms Coming Soon</div>
       </div>


    </div>
      
  )
}

export default App
