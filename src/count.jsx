import { useState } from "react";

export default function Counter(){
    const [count,setCount]=useState(0)
    const addHandle=()=>{
        const addCount=count+1;
        setCount(addCount)
    }
    const reduceHandle=()=>{
        const reduceCount=count-1;
        setCount(reduceCount)
    }
    return(
        <div style={{border:'2px solid blue ', padding: '10px' }}>
            <h3>Counter by click:{count}</h3>
            <button onClick={addHandle} style={{background:'green',marginRight:'5px'}}>Click for Add</button>
            <button onClick={reduceHandle} style={{background:'green'}}>Click for reduce</button>
        </div>
    )
}