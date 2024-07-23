import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import Users from './components/Users';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
