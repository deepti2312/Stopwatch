import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import './App.css';
import { Stopwatch, Currenttime } from './Component';


export const MyNavbar = () => {
  return (
    <div data-testid="clock-icon">
      <nav className='navBar' data-testid="navbar">
        <div className='icon' data-testid="link">
          <Link data-testid="clock-link" to="/" className='clockicon'><i className="fa fa-clock"></i></Link>
          <Link data-testid="stopwatch-link" to="/stopwatch" className='stopwatchicon'><i className="fa fa-stopwatch"></i></Link>
        </div>
      </nav>
    </div>
  )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path='/' element={<Currenttime />} />
          <Route path='/stopwatch' element={<Stopwatch />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
