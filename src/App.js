import CakesContainer from './components/CakesContainer';
import './App.css';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UsersContainer from './components/UsersContainer';

function App() {
  return (
    <div className="App">
      {/* <HooksCakeContainer />
      <CakesContainer />
      <IceCreamContainer />
      <NewCakeContainer />
      <ItemContainer cake />
      <ItemContainer /> */}
      <UsersContainer />
    </div>
  );
}

export default App;
