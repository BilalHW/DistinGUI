import React from 'react'
import { useState, useEffect } from "react";
import RemoveButton from './RemoveButton';
import EditItem from './EditItem';

function GetItems(category) {
    const [items, setState] = useState([]);


    useEffect(() => {
        async function fetchData() {
        // You can await here
        await fetch("/api/item/", {method: "GET"})
        .then(async (res) => setState(await res.json()))
        }
        fetchData();
    }, []); 
  return (
    <div>
        {items.map((state)=>{
                return state.category===category.category ?
                                    <div className=" w-4/5 h-fit relative ml-20 mb-20 p-10 align-middle rounded-lg shadow-xl bg-white ">
                                        <div className="flex flex-row justify-between">
                                            <div className="flex flex-col justify-start">
                                                <h1 className="text-dark font-extrabold text-2xl">
                                                    {state.name}
                                                </h1>
                                                <p className="ml-3 opacity-50 font-serif text-left">
                                                    {state.description}
                                                </p>
                                            </div>
                                            <div className={" p-2 rounded-smjustify-items-center align-middle"}>
                                                <img src={state.image} className="w-full h-48 rounded-xl align-middle" alt='no img' />
                                            </div>
                                            <div className="h-full mx-1 px-1 rounded-md text-xl text-right text-black font-extrabold ">
                                               {state.price}$
                                            </div>
                                        </div>
                                        <div className='flex flex-row justify-between align-baseline place-content-baseline'>
                                                <RemoveButton id={state._id} name="item"/>
                                                <EditItem  id={state._id} />
                                            </div>
                                    </div>
                            :   null
            
        
        })}
        
    </div>
  )
}

export default GetItems
