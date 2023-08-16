import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import ViewCart from './components/ViewCart';
function App() {
  return (
    <BrowserRouter> 
    <Routes>
    <Route path="/" element={<MainPage/>}/>
    <Route path="/Cart" element={<ViewCart/>}/>
    </Routes>
    </BrowserRouter>  
  );
}

export default App;
