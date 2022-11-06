import './App.css';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar  color="rgba(250, 232, 227, 0.8)"/>
      <div>
      <ItemListContainer/> 
      </div>
    </div>
  );
}

export default App;
