import React from 'react'
import './PoolGallary.css'
import PoolCard from '../PoolCard/PoolCard'

const PoolGallary = () => {
  return (
   <>
   <div className='pool_galary_maincont'>
    <h1>Pool Details</h1>
    <div className='pool_card'>
        <PoolCard/>
        <PoolCard/>
        <PoolCard/>
        <PoolCard/>
        <PoolCard/>
        <PoolCard/>
        <PoolCard/>
        <PoolCard/>
        <PoolCard/>

    </div>
   </div>
   </>
  )
}

export default PoolGallary
