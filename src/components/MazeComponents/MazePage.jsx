import React from 'react'
import MazeNavbar from './MazeNavbar'
import { MazeProvider } from './MazeContext'
import MazeBox from './MazeBox'
export default function MazePage() {
  return (

    <MazeProvider>
    <div className='mt-3'>
         
         <div>
            <h1 className='text-[30px] text-blue-600 font-semibold mb-1'>Maze Algorithms</h1>

            <MazeNavbar />

            <MazeBox />
         </div>

    </div>
    </MazeProvider>
  )
}
