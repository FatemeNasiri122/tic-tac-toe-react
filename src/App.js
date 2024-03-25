import "./App.css";
import TicTacToe from "./components/TicTacToe";
import Toggle from "./components/theme/Toggle";
import useTheme from "./components/theme/useTheme";

function App() {
  const [theme, setTheme] = useTheme();
  console.log(theme)
  
  return <div className="container" data-theme={theme}>
    <Toggle theme={theme} setTheme={setTheme} />
    <TicTacToe />
  </div>;
}

export default App;
