import './App.css'
import Lottery from './Lottery'
import Lottery2 from './Lottery2'
import { sum } from './helper'

function App() {
  let winCondition = (ticket) => {
    return sum(ticket) >= 20;
    //return ticket.every((num) => num === ticket[0]);  //All digits are same
  }

  return (
    <>
      {/* <Lottery /> */}
      <Lottery2 n={3} /*winningSum={15}*/ winCondition={winCondition}/>
    </>
  )
}

export default App
