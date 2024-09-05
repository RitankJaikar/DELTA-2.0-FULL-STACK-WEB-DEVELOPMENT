import { useState, useEffect } from "react";

export default function Joker() {
    const URL = "https://official-joke-api.appspot.com/random_joke";

    let [newJoke, setNewJoke] = useState({});

    async function getJoke() {
        let res = await fetch(URL);
        console.log(res);
        let jsonJoke = await res.json();
        console.log(jsonJoke);
        setNewJoke(jsonJoke);
    }

    useEffect(() => {
        getJoke();
    }, []);     //for first joke

    return(
        <div>
            <h3>Joker</h3>
            <p>{newJoke.setup}</p>
            <p>{newJoke.punchline}</p>
            <button onClick={getJoke}>New Joke</button>
        </div>
    )
}