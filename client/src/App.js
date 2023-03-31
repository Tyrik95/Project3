import './App.css';
import { Route, Routes } from 'react-router-dom'
import Landing from './views/Landing';
import MarqueeHeader from './components/MarqueeHeader';
import Navbar from './components/Navbar';
import Watch from './views/Watch';

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
                {/* <Route path='/' element={<Landing/>}/> */}
                <Route path='/' element={<Watch/>}/>
                {/* <Route path='/team' element={<Team/>}/> */}
                {/* <Route path='/league' element={<League/>}/> */}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
