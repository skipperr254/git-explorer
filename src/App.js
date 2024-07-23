import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import Users from './components/Users';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/user/:username" element={<UserProfile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
