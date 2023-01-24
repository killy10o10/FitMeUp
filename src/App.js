import './App.css';
import './assets/Main.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import Sidebars from './components/Sidebar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebars />
        <Routes>
          {/* <Route path="/" element={<Trainer />} />
        <Route path="/details" element={<Popup />} />
        <Route path="/appoiment" element={<Appoiment/>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
