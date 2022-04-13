import Home from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sell from './components/Sell';
import Create from './components/Create';
import Owned from './components/Owned';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='p-10 mx-20'>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/owner" element={<Owned />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
