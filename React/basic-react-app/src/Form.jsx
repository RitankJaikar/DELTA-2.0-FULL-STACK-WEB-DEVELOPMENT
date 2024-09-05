function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form was sumitted");
}

export default function Form() {
    return (
        <form onSubmit={handleFormSubmit}>
            <input/>
            <br />
            <br />
            <button /*onClick={handleFormSubmit}*/>Submit</button>
        </form>
    )
}