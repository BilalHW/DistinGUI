import React from 'react'
import GetCategory from '../components/GetCategory'
import CreateCategory from '../components/CreateCategory'
import CreateItem from '../components/CreateItem'
function AdminPage() {
  return (
    <div className="max-h-full max-w-full font=extrabold bg-yellow-500 text-center">
        <div className='text-red-600 text-center font-extrabold text-7xl italic p-10'>
            <h1 className=''>Distin GUI</h1>
        </div>
      <div className="flex flex-row justify-around ">

        <div>
              <CreateCategory />
        </div>
        <div >
              <CreateItem />
        </div>
      </div>
        <div className='flex flex-row '>
          <div className='w-screen'>
            <GetCategory />
          </div>
        </div>
    </div>
  )
}

export default AdminPage