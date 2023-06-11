
function handleFormSubmit(evt) {
    evt.preventDefault();
    console.log("SUBMITTED THE FORM!!!")
}




function Form() {
    return(
       <form onSubmit={handleFormSubmit}>
            <button>Submit</button>
        </form>
    )
}

export default Form;