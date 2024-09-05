import { useState } from "react";

export default function Comments({comments}) {
    return (
        <div>
            <h3>Comments:-</h3>
            {
                comments.map(comment => {
                    return (
                        <div key={comment.username}>
                            <p>User- {comment.username}</p>
                            <p>Remark- {comment.remarks}</p>
                            <p>Rating- {comment.rating}</p>
                            <br />
                        </div>
                    );
                })
            }
        </div>
    )
}