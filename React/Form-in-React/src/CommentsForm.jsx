import { useState } from "react";
import "./CommentsForm.css"

export default function CommentsForm({comments, setComments}) {
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: ""
    });

    function handleInputChange(event) {
        setFormData(currData => {
            return {...currData, [event.target.name]: event.target.value}
        })
    }
    
    console.log(comments);

    function handleSubmit(event) {
        event.preventDefault();
        setComments(prevComments => {
            return [...prevComments, formData];
        });
        console.log(formData);
    }

    return (
        <div>
            <h4>Give a comment!</h4>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="username" name="username" id="username" value={formData.username} onChange={handleInputChange} required/>
                <br /><br />
                <textarea name="remarks" placeholder="remarks..." id="remarks" value={formData.remarks} onChange={handleInputChange} required></textarea>
                <br />
                <span className="rating">
                    <input type="radio" id="1" name="rating" value="1" onChange={handleInputChange} checked={formData.rating === "1"} required/>
                    <label htmlFor="1">1</label>
                </span>
                <span className="rating">
                    <input type="radio" id="2" name="rating" value="2" onChange={handleInputChange} checked={formData.rating === "2"}/>
                    <label htmlFor="2">2</label>
                </span>
                <span className="rating">
                    <input type="radio" id="3" name="rating" value="3" onChange={handleInputChange} checked={formData.rating === "3"}/>
                    <label htmlFor="3">3</label>
                </span>
                <span className="rating">
                    <input type="radio" id="4" name="rating" value="4" onChange={handleInputChange} checked={formData.rating === "4"}/>
                    <label htmlFor="4">4</label>
                </span>
                <span className="rating"> 
                    <input type="radio" id="5" name="rating" value="5" onChange={handleInputChange} checked={formData.rating === "5"}/>
                    <label htmlFor="5">5</label>
                </span>
                <br /><br />
                <button>Submit</button>
            </form>
        </div>
    )
}