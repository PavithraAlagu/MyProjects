import React, { useEffect, useState } from 'react'
import Buttons from './Buttons'
import List from './List'
const App = () => {
    const API_URL='https://jsonplaceholder.typicode.com/'
    const[reqType,setReqType] = useState('users')
    const[items,setItems]=useState([])
    
    useEffect(()=>{
    const fetchItems = async() =>{
        try{
     
        const response= await fetch(`${API_URL}${reqType}`)
        if(!response.ok) throw Error("Data not received")
        const res = await response.json()
        console.log(res)
        setItems(res)
        }catch(err){
            console.error(err)
        }
        
    }
    fetchItems();
},[reqType])
    
  return (
    <div>
        <Buttons className="buttonClass"
        reqType={reqType}
        setReqType={setReqType}
        />
        <List
        items={items}
        />
    </div>
  )
}

export default App