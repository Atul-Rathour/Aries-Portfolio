import React from 'react'
import CyberScroll from './CyberScroll'



const TransitionPage = ({scrollRef}) => {

  
  return (
    <main>

    <div className='overflow-clip'>
      <CyberScroll scrollRef={scrollRef}/>
    </div>
    </main>
  )
}

export default TransitionPage