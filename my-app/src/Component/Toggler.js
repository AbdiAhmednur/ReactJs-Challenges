import {useState} from 'react';
import "../Toggler.css";

//const [count, setCount] = useState(0);


function Toggler() {
    const [isHappy, setIsHappy] = useState(true)
    const toggleIsHappy = () => setIsHappy(!isHappy);
    return (
        <div>
            <p className='Toggler' onClick={toggleIsHappy}> 
            {isHappy ?  "😊" : "😔"} 
            </p>

        </div>
    );
}

export default Toggler;