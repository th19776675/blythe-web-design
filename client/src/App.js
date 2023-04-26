import './App.css';
import Header from "./Components/Header";
import Home from "./Home";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom"

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={ <Home /> }/>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
