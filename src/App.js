
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from "./Components/NavBar/navbar";
import Home from './Components/Home/home';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Home />
    </BrowserRouter>
  );
}

export default App;
