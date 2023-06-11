import {useState} from 'react';
import "../Toggler.css";

//const [count, setCount] = useState(0);


function ToggleCounter() {
    const [isHappy, setIsHappy] = useState(true)
    const [count, setCount] = useState(0);
    const toggleIsHappy = () => setIsHappy(!isHappy);
    const incrementCount = () => setCount(count + 2);
     

    return (
        <div>
            <p className='Toggler' onClick={toggleIsHappy}> 
            {isHappy ?  "😊" : "😔"} 
            </p>
            <p onClick={incrementCount}>{count}</p>
            <button onClick={incrementCount}> + </button>

        </div>
    );
}

export default ToggleCounter;