import { useState, useEffect } from "react";

export default function Counter() {
    let [countx, setCountx] = useState(0);
    let [county, setCounty] = useState(0);

    function incCountx() {
        setCountx((currCount) =>{
            return currCount +1;
        });
    }

    function incCounty() {
        setCounty((currCount) =>{
            return currCount +1;
        });
    }

    useEffect(function printSomething() {
        console.log("###");
    }, [countx]);

    return (
        <div>
            <h3>Count = {countx}</h3>
            <button onClick={incCountx}>Increase Count</button>
            <br />
            <h3>Count = {county}</h3>
            <button onClick={incCounty}>Increase Count</button>
        </div>
    );
}