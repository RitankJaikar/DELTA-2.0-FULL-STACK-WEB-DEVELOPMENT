import { useState } from "react";

function init() {
    console.log("init was executed");
    return Math.random();
}

export default function Counter() {
    // let [stateVar, setStateVar] = useState(0);
    let [count, setCount] = useState(init);    //initialization
    console.log("Component is Rendered!");
    console.log("1",count);
    console.log("------------")

    function incCount() {
        // setCount(25);
        setCount((currCount) =>{
            return currCount +1;
        })
        setCount((currCount) =>{
            return currCount +1;
        })
        console.log("2",count);
    }

    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    );
}