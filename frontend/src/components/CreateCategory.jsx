import {React, useState } from 'react'
function CreateCategory() {
    const [state, setState] = useState('')
    const [isShown, setIsShown] = useState(false);
    async function onSubmit(){
        await fetch("/api/category/", {
            method: "POST", 
            body: JSON.stringify({name: state}), 
            headers: {"Content-type": "application/json"}
        })
        setState('')
    }
    const handleClick = event => {
        // 👇️ toggle shown state
      setIsShown(current => !current);
    }
  return (
    <div className='font-serif font-bold'>
        <button 
            onClick={handleClick} 
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-3 align-bottom"
            > 
                Create Category
            </button>
        {isShown && (
                <section className='form'>
                    <form onSubmit={onSubmit}>
                        <div className='form-group'>
                            <label>Name</label>
                            <input 
                                type="text"
                                name="text"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                required
                                />
                        </div>
                        <div className='form-group flex flex-row justify-between'>
                                <button 
                                className=' bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded mr-1' 
                                type='submit'>
                                    Add
                                </button>
                                <button 
                                className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded' 
                                onClick={handleClick}
                                >
                                    cancel
                                </button>
                        </div>
                    </form>
                </section>
        )}

    </div>
    
  )
}

export default CreateCategory