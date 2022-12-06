import React from 'react'
import GetCategoryUser from '../components/GetCategoryUser'

function UserPage() {
  return (
    <div className='max-h-full max-w-full font=extrabold bg-yellow-500 text-center'>
        <div className='text-red-600 text-center font-extrabold text-7xl italic p-10'>
            <h1 className=''>Distin GUI</h1>
        </div>
       <GetCategoryUser />
    </div>
  )
}

export default UserPage