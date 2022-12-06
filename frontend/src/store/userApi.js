import {useState, useEffect} from "react";

export function useGetCategory(){
    const [state, setState] = useState([]);
    useEffect(() => {
    async function fetchData() {
        // You can await here
        await fetch("/api/category/", { method: "GET" }).then(async (res) =>{
            const data= await res.json()
            setState(data)
        }
        
        );
    }
    fetchData();
    }, []);
    return state;
}
export function useGetItems(){
    const [items, setState] = useState([]);
    useEffect(() => {
        async function fetchData() {
        // You can await here
        await fetch("/api/item/", {method: "GET"})
        .then(async (res) => setState(await res.json()))
        }
        fetchData();
    }, []); 
    return items;
}
// export function useEditCategory(props,state){
    
//         async function editCategory(){
//             await fetch("/api/category/"+props, {
//                 method: "PUT", 
//                 body: JSON.stringify({name: state.category}), 
//                 headers: {"Content-type": "application/json"}
//             })
//         }
//         editCategory();
// }
// export function useEditItem(props,state){
    
//     async function editItem(){
//         await fetch("/api/item/"+props, {
//             method: "PUT", 
//             body: JSON.stringify(
//                 {name: state.name,
//                 description: state.description,
//                 image: state.image,
//                 price: state.price,
//                 category: state.category}
//                 ), 
//             headers: {"Content-type": "application/json"}
//         })
//     }
//     editItem();
// }