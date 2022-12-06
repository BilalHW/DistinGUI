import {React,useState} from 'react'

function CreateItem() {
    const [state, setState] = useState('')
    const [isShown, setIsShown] = useState(false);
    async function onSubmit(){
        await fetch("/api/item/", {
            method: "POST", 
            body: JSON.stringify(
                {name: state.name,
                description: state.description,
                image: state.image,
                price: state.price,
                category: state.category}
                ), 
            headers: {"Content-type": "application/json"}
        })
        setState('')
    }
    const handleClick = event => {
    
        // 👇️ or simply set it to true
        if(isShown===false){
          setIsShown(true);
        }else{
          setIsShown(false);
        }
    }
  return (
    <div className='font-serif font-bold'>
        <button 
            onClick={handleClick} 
            className="font-serif bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-3 align-bottom"
            > 
                Create Item
         </button>
        {isShown && (
                <section className='form'>
                    <form onSubmit={() => onSubmit()}>
                        <div className='form-group'>
                            <label className='font-serif'>Name</label>
                            <input 
                                type="text"
                                name="text"
                                value={state.name}
                                onChange={(e) => setState({...state, name: e.target.value})}
                                required
                                />
                        </div>
                        <div className='form-group'>
                            <label>Item Description</label>
                            <input 
                                type="text"
                                name="text"
                                value={state.description}
                                onChange={(e) => setState({...state, description: e.target.value})}
                                />
                        </div>
                        <div className='form-group'>
                            <label>Item image</label>
                            <input 
                                type="text"
                                name="text"
                                value={state.image}
                                onChange={(e) => setState({...state, image: e.target.value})}
                                />
                        </div>
                        <div class="flex flex-col form-group">
                            <label for="price" class="mt-4 mb-1 uppercase text-grey-darker text-xs font-bold">Price</label>
                            <div class="flex flex-row">
                                <span class="flex items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold text-grey-darker">$</span>
                                <input 
                                    type="number" 
                                    name="price" 
                                    class="bg-blue py-2 rounded text-grey-darkest border border-grey-lighter rounded-l-none font-bold"
                                    value={state.price}
                                    onChange={(e) => setState({...state, price: e.target.value})}
                                     />
                            </div>
                        </div>
                        <div className='form-group'>
                            <label>category name</label>
                            <input 
                                aria-placeholder='Please'
                                type="text"
                                name="text"
                                value={state.category}
                                onChange={(e) => setState({...state, category: e.target.value})}
                                required
                                />
                               
                        </div>
                        <div className='form-group justify-between flex flex-row'>
                                <button 
                                className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded' 
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

export default CreateItem