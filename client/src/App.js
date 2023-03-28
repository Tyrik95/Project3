import './App.css';
import { Route, Routes } from 'react-router-dom'
import Landing from './views/Landing';
import MarqueeHeader from './components/MarqueeHeader';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App"> 
    <div> hi </div>
      <MarqueeHeader/>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Landing/>}/>
      </Routes>
    </div>
  );
}

export default App;
