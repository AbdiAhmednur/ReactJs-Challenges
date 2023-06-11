

function Greater({person="everyone", from="anonymous" }) {
    console.log(person)
    return (
        <div>
            <h1>Hi there, {person}</h1>;
            <h2>from, {from}</h2>
        </div>
    );
}

export default Greater;