import { Route, Routes } from 'react-router-dom';


import Home from './pages/Home';
import PlaceToStay from './pages/PlaceToStay';
import './App.css';

function App() {
  return (
    <Routes>
      <Route exact path="/"  element={<Home />} />
      <Route exact path="/placetostay" element={<PlaceToStay />} />
    </Routes>
  );
}

export default App;
