import React from 'react'
import SortingNavbar from './SortingNavbar'
import { SortingProvider } from '../../context/SortingContext'
import Bars from './Bars'
 export default function SortingPage() {

  

  return (

    <SortingProvider>
    <div className=' container-full'>
     
     <h1 className='text-blue-600 text-[40px] font-semibold'>Sorting</h1>

        <SortingNavbar />


        <Bars />
    </div>
    </SortingProvider>
  )
}




