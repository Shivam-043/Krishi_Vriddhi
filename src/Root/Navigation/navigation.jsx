import React from 'react'
import './navigation.css'
import { LeftNav } from './Left NavBar/leftNav'
import { RightNav } from './Right NavBar/rightNav'

const Navigation = () => {

  return (
    <div className='navigationBar'>
      <div>
        <LeftNav />
      </div>

      <div>
        <RightNav />
      </div>
      {/* <h1>Navigation Bar</h1> */}
    </div>
  )
}

export default Navigation
