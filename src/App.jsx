import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
// import { Home } from '@mui/icons-material';
import Header from './Components/Header'
import Home from './Pages/Home'

function App() {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App
