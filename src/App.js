import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar text="HOLA" color="white"/>
      </header>
    </div>
  );
}

export default App;
