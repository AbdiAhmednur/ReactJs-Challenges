import { useState, useEffect } from "react";


function TAPE() {
    const [ count, setCount ] = useState(0)
    const [ name, setName] = useState("")
    useEffect(function myEffect(){
        console.log("MY EFFECT WAS CALLED!");
    }, [count, name]
    );
    const Increment = () => {
        setCount( c => (c+1));
    };
    const handleChnage = (e) => {
        setName(e.target.value);
    }
    return (
        <div>
            <h1>{count}</h1>
        <button onClick={Increment}>+1</button>
        <p> name: {name}</p>
        <input value={name} onChange={handleChnage} type="text" />
        </div>
    );
}

export default TAPE;
