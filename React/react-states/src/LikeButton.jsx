import { useState } from "react";

export default function  LikeButton() {
    let [isLiked, steIsLiked] = useState(true);

    function toggleLike() {
        console.log("Like Toggled");
        steIsLiked(!isLiked);
    }

    return (
        <div>
            <p onClick={toggleLike}>
                {isLiked? <i className="fa-regular fa-heart"></i> : <i className="fa-solid fa-heart" style={{color: "red"}}></i>}
            </p>
        </div>
    )
}