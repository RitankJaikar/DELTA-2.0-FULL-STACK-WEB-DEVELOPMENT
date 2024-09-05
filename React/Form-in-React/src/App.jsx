import './App.css'
import Form from './Form'
import CommentsForm from './CommentsForm'
import Comments from './Comments';
import { useState } from "react";

function App() {
  let [comments, setComments] = useState([
    {
        username: "gamer@123",
        remarks: "Very good movie",
        rating: "3"
    },
    {
        username: "tiger@salman",
        remarks: "Must watch",
        rating: "5"
    }
  ]);

  return (
    <>
      {/* <Form /> */}
      <CommentsForm comments={comments} setComments={setComments}/>
      <br /><br />
      <Comments comments={comments}/>
    </>
  )
}

export default App
