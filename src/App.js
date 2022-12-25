import CakesContainer from './components/CakesContainer';
import './App.css';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';

function App() {
  return (
    <div className="App">
      <HooksCakeContainer />
      <CakesContainer />
      <IceCreamContainer />
      <NewCakeContainer />
      <ItemContainer cake />
      <ItemContainer iceCream />
    </div>
  );
}

export default App;
