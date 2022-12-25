import CakeContainer from './components/cakeContainer';
import './App.css';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/iceCreamContainer';

function App() {
  return (
    <div className="App">
      <HooksCakeContainer />
      <CakeContainer />
      <IceCreamContainer />
    </div>
  );
}

export default App;
