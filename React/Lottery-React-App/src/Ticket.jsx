import TicketNum from "./TicketNum";
import "./Ticket.css";

export default function Ticket({ticket}) {
    return (
        <div className="Ticket">
            {ticket.map((item, idx) => {
                return (
                    <TicketNum num={item} key={idx}/>
                );
            })}
        </div>
    );
}