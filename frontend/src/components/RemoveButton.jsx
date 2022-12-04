import {React, useState } from 'react'

function RemoveButton(props) {
    
    async function onSubmit(){
        if(props.name=="category"){
            await fetch("/api/category/"+props.id, {
                method: "DELETE", 
                headers: {"Content-type": "application/json"}
            })}else if(props.name=="item"){
                await fetch("/api/item/"+props.id, {
                    method: "DELETE", 
                    headers: {"Content-type": "application/json"}
                })
            }else{
                return "Error"
            }
    }
  return (
    <div>
        <button 
            onClick={()=>onSubmit()} 
            className=" bg-red-700 hover:bg-red-900 text-black font-bold py-2 px-4 border border-black-700 rounded-md"
            >
                Delete
            </button>
    </div>
  )
}

export default RemoveButton