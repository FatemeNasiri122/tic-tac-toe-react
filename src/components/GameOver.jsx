import GameState from "./GameState";

function GameOver({ gameState }) {
  switch (gameState) {
    case GameState.inProgress:
      return <></>;
    case GameState.playerOWins:
      return <div className="game-over"> برنده شد O </div>;
    case GameState.playerXWins:
      return <div className="game-over">برنده شد X </div>;
    case GameState.draw:
      return <div className="game-over">مساوی</div>;
    default:
      return <></>;
  }
}

export default GameOver;
