

function ColorList({colors}){
    
    return (
        <div>
            <p>ColorList</p>
           <ul>
            {colors.map((c) => (
           <li style={{color: c}}>{c}</li>
           
           ))} 
           
           </ul>

        </div>
    )
}

export default ColorList; 









/*function ColorList({colors}){
    
    return (
        <div>
            <p>ColorList</p>
           <ul>
            {colors.map((color) => (
           <li>{color}</li>
           
           ))} 
           
           </ul>

        </div>
    )
}

export default ColorList; */









/*function ColorList({colors}){
          const lis = colors.map( color => <li>{color}</li>);
    return (
        <div>
            <p>ColorList</p>
           <ul> {lis} </ul>

        </div>
    )
}

export default ColorList; */







/*function ColorList({colors}){
    const elements = [<p>Hello!</p>, <h1>Bye!</h1>, <input type="password" />]
    return (
        <div>
            <p>ColorList</p>
            {elements}

        </div>
    )
}

export default ColorList; */