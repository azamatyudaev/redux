import CakesContainer from './components/CakesContainer';
import './App.css';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';

function App() {
  return (
    <div className="App">
      <HooksCakeContainer />
      <CakesContainer />
      <IceCreamContainer />
      <NewCakeContainer />
    </div>
  );
}

export default App;
