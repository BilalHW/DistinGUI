import React from 'react'
import GetItems from './GetItems';
import { useEffect, useState } from 'react';
import EditCategory from './EditCategory';
import RemoveButton from './RemoveButton';

function GetCategory() {
    const [state, setState] = useState([]);


    useEffect(() => {
      async function fetchData() {
        // You can await here
        await fetch("/api/category/", {method: "GET"})
        .then(async (res) => setState(await res.json()))
      }
      fetchData();
    }, []); 

  return (
    <div className='font-serif'>
        {state.map((cat)=>(
        <>
          <div className='flex flex-row mt-6 justify-between'>
            <h1 className=' font-extrabold text-3xl italic'>{cat.name}</h1>
            <div className='flex flex-row justify-between'>
                <EditCategory id={cat._id} />
                <RemoveButton id={cat._id} name="category"/>
            </div>
            
          </div>
          <GetItems category={cat.name} />
        </>
        
      ))}
    </div>
  )
}

export default GetCategory