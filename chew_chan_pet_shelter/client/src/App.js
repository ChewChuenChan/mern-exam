import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Create from './components/Create';
import Update from './components/Update';
import OnePet from './components/OnePet';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/edit/:id" element ={<Update/>}/>
          <Route path ="/new" element ={<Create/>}/>
          <Route path ="/onepet/:id" element ={<OnePet/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
