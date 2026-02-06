import "./App.css";
import Navigation from "./Components/Navigation";
import { Route, Routes } from "react-router-dom";
import GameArena from "./Components/game/GameArena";
import BattleLobby from "./Components/lobby/BattleLobby";
import VsScreen from "./Components/vs/VsScreen";
import Home from "./Components/Home/Home";
import Login from "./Components/login/Login";

const App = () => {
  <>
    <Navigation />
  </>;
  return (

    <Routes>
      <Route exact path="/" element={<Home />} />

      <Route exact path="/login" element={<Login />} />

      <Route exact path="/lobby" element={<BattleLobby />} />

      <Route exact path="/game" element={<GameArena />} />

      <Route exact path="/vs" element={<VsScreen />} />
      <Route path="/vs/:level" element={<VsScreen />} />

    </Routes>
    // </>
  );
};
export default App;
