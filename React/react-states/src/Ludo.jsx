import { useState } from "react"

export default function Ludo() {
    let [moves, setMoves] = useState({blue: 0, yellow: 0, red: 0, green: 0});
    let [arr, setArr] = useState(["no moves"]);

    function updateBlue() {
        console.log("moves.blue:",moves.blue);
        setMoves(prevMoves => {
            return {...prevMoves, blue: prevMoves.blue + 1}
        });

        setArr(prevArr => {
            return [...prevArr, "blue move"];
        });
        console.log(arr);
    }

    function updateYellow() {
        console.log("moves.yellow:",moves.yellow);
        setMoves(prevMoves => {
            return {...prevMoves, yellow: prevMoves.yellow + 1}
        });
    }

    function updateRed() {
        console.log("moves.red:",moves.red);
        setMoves(prevMoves => {
            return {...prevMoves, red: prevMoves.red + 1}
        });
    }

    function updateGreen() {
        console.log("moves.green:",moves.green);
        setMoves(prevMoves => {
            return {...prevMoves, green: prevMoves.green + 1}
        });
    }

    return (
        <div>
            <p>Game Begins</p>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <p>{arr}</p>
                <button style={{backgroundColor: "blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                <button style={{backgroundColor: "yellow"}} onClick={updateYellow}>+1</button>
                <p>Red moves = {moves.red}</p>
                <button style={{backgroundColor: "red"}} onClick={updateRed}>+1</button>
                <p>Green moves = {moves.green}</p>
                <button style={{backgroundColor: "green"}} onClick={updateGreen}>+1</button>
            </div>
        </div>
    )
}