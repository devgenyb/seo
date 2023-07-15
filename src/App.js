import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SidebarMenu from './components/SidebarMenu';
import Layout from './components/Layout';
import Home from './components/pages/Home';
import Promotions from './components/pages/Promotions';
import About from './components/pages/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/akczii' element={<Promotions />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
