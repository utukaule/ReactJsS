import React from 'react'
import Random from './components/Random'
import Tag from './components/Tag'

const App = () => {
  return (
    <>

     <div className='w-full h-screen flex flex-col background items-center'>
      <h1 className=' w-11/12 text-center mt-[20px] bg-white rounded-lg px-10 py-2 text-4xl font-bold'>RANDOM GIFS</h1>
      <div className='flex flex-col w-full items-center gap-y-10 mt-[30px]'>
        <Random/>
        <Tag/>
      </div>
     </div>

    </>
  )
}

export default App
