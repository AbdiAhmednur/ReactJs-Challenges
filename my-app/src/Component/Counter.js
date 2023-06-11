import {useState} from 'react';

//const [count, setCount] = useState(0);



function Counter() {

      const [num, setNum]  =  useState(5);
      console.log("Component Has Been Executed Again!");
      console.log(`num: ${num}`);
      const changeNum = () => {
        setNum(num + 1); 
      };
    
    return(
        <div>
            <p> The count is: {num} </p>
            <button onClick={changeNum}>Increment</button>
        </div>

    );
}

export default Counter;