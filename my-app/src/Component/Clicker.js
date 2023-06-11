
function handleClick(){
    console.log("CLICKED THE BUTTON!");
}

function handleHover(){
    console.log("HOVERED!!")
}

function Clicker(){
    return (
        <div>
            <p onMouseOver={handleHover}> Hover Over Me </p>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default Clicker;