import './App.css';
import { Route, Routes } from 'react-router-dom'
import Landing from './views/Landing';
import MarqueeHeader from './components/MarqueeHeader';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <div className='header'>
        <MarqueeHeader/>
      </div>
      <div className='app'>
        <div className='main'>
          <Navbar/>
          <div className='mainContent'>
            <Routes>
                <Route path='/' element={<Landing/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
