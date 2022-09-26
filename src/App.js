import { Player, PlayerState, Table, Round } from "./classes";

const playerZeroStateZero = new PlayerState(0, 0, '', '', false, 0)
const playerOneStateZero = new PlayerState(0, 0, '', '', false, 0)

const playerZero = new Player(0, "playerZero", false, [playerZeroStateZero])
const playerOne = new Player(1, "playerOne", false, [playerOneStateZero])

const playerArray = [playerZero, playerOne]

const roundOne = new Round(8, 'S', '')
const roundArray = [roundOne]

const table = new Table(playerArray, roundArray)
console.log(table)

function App() {
  return (
    <div>
    
    </div>
  );
}

export default App;
