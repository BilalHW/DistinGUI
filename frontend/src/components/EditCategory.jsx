import {React, useState } from 'react'

function EditCategory(props) {
    const [category, setCategory] = useState('');
    const [isShown, setIsShown] = useState(false);
    async function onSubmit(){
        await fetch("/api/category/"+props.id, {
            method: "PUT", 
            body: JSON.stringify({name: category}), 
            headers: {"Content-type": "application/json"}
        })
        setCategory('')
    }
    const handleClick = event => {
        setIsShown(current => !current);
    }
  return (
    <div>
        <button 
            onClick={handleClick} 
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mr-1"
            > 
                Edit
            </button>
            {isShown && (
                <section className='form'>
                    <form onSubmit={onSubmit}>
                        <div className='form-group'>
                            <label>Change Name</label>
                            <input 
                                type="text"
                                name="text"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                required
                                />
                        </div>
                        <div className='form-group flex flex-row'>
                                <button 
                                className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded' 
                                type='submit'>
                                    save 
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

export default EditCategory