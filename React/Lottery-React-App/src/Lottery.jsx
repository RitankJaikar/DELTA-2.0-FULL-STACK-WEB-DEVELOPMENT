import { useState } from "react";

export default function Lottery() {
    let [result, setResult] = useState("Lottery");
    let [ticket, setTicket] = useState(null);

    function newTicket() {
        setTicket(() => {
            const ticket = Math.floor(100 + Math.random()* 900);
            //const digitSum = ticket/100 + (ticket/10)%10 + ticket%10;

            function sumOfDigits(number) {
                let sum = 0;
                while (number > 0) {
                    sum += number % 10;  // Get the last digit and add to sum
                    number = Math.floor(number / 10);  // Remove the last digit
                }
                return sum;
            }

            if(sumOfDigits(ticket) > 20) {
                setResult("Lottery 'Congratulations, you won!'");
            }
            else {
                setResult("Lottery 'Better luck next time!'");
            }
            return ticket;
        });
    }

    return (
        <div>
            <h2>{result}</h2>
            <br />
            <p>Lottery Ticket = {ticket}</p>
            <button onClick={newTicket}>Get New Ticket</button>
        </div>
    );
}