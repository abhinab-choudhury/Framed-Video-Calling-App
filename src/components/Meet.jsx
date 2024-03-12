import React from 'react'
import { useParams } from 'react-router'

function Meet() {
  let { id } = useParams()
  return (
    <div className='w-100 h-100 flex justify-center items-center'>
      <h1> Meet Page </h1>
    </div>
  )
}

export default Meet
