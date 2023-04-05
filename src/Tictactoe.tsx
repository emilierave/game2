import Game from "./pages/Game";
import Start from "./pages/Start";
import Finished from "./pages/Finished";
import useTickTackToe from "./hooks/useTicTacToe"


const Tictactoe = () => {
  const game = useTickTackToe();
    

  return (
    <div className="Tictactoe">
      { game.status === "new" && <Start handleStart={game.handleStart} /> }
      { game.status === "finished" && <Finished name={game.winner} handleRestart={game.handleRestart} /> }
      { game.status === "started" &&<Game board={game.board} handleClick={game.handleClick} /> }
    </div>
  );

}

export default Tictactoe;