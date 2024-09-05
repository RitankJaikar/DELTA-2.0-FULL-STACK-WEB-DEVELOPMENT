import { useState } from "react";

export default function Form() {
    let [formData, setFormData] = useState({
        input1: "123",
        input2: "456"
    });
    
    function handleInputChange(event) {
        // console.log(event.target.value);
        // console.log(event.target.name);
        setFormData((currData) => {
            //currData[event.target.name] = event.target.value;
            return {...currData, [event.target.name]: event.target.value};
        })
    }

    function handleSubmit (event) {
        event.preventDefault();
        console.log(formData);
        setFormData({
            input1: "",
            input2: ""
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="form-input1">Write Here1</label>&nbsp;
            <input type="text" placeholder="Write Here.." value={formData.input1} onChange={handleInputChange} id="form-input1" name="input1"/>
            <br /><br />
            <label htmlFor="form-input2">Write Here2</label>&nbsp;
            <input type="text" placeholder="Write Here.." value={formData.input2} onChange={handleInputChange} id="form-input2" name="input2"/>
            <br /><br />
            <button>Submit</button>
        </form>
    );
}