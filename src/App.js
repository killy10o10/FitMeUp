import './App.css';
import './assets/Main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebars from './components/Sidebar';
import Datepickers from './components/Datepicker';

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebars />
        <Routes>
          {/* <Route path="/" element={<Trainer />} /> */}
          <Route path="/datepicker" element={<Datepickers />} />
          {/* <Route path="/appoiment" element={<Appoiment/>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
