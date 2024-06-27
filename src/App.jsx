import GalleryMode from "./components/GalleryMode";
import Header from "./components/Header";
import OnlainBattle from "./components/OnlainBattle";
import Product from "./components/Product";
import Top from "./components/Top";
import BattleSystem from "./components/BattleSystem";
import Underside from "./components/Underside";
import CharacterApp from "./components/CharacterApp";

function App() {
  return (
    <>
      <Header />
      <Top />
      <Underside />
      <CharacterApp />
      <BattleSystem />
      <OnlainBattle />
      <GalleryMode />
      <Product />
    </>
  );
}

export default App;
