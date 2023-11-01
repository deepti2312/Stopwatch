import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Stopwatch, Currenttime } from './Component';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Currenttime />} />
          <Route path='/stopwatch' element={<Stopwatch />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
