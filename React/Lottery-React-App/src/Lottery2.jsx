import { useState } from "react"; 
import Ticket from "./Ticket";
import { getTicket, sum } from "./helper";
import Button from "./Button";

export default function Lottery2({n=3, /*winningSum=15*/ winCondition}) {
    let [ticket, setTicket] = useState(getTicket(n));
    let isWinning = winCondition(ticket);

    function buyTicket() {
        setTicket(getTicket(n));
    }

    return (
        <div>
            <h1>Lottery Game</h1>
            <Ticket ticket={ticket}/>
            <br />
            <Button action={buyTicket} />
            <h3>{isWinning && "Congratulations, you won!"}</h3>
        </div>
    );
}