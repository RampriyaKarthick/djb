import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from "./Pages/UserList/UserList"
import Navbar from "./components/Navbar/Navbar"
import UserProfile from './Pages/UserProfile/UserProfile';
import PhotoAlbum from './Pages/PhotoAlbum/PhotoAlbum';

import './App.css'




function App() {


  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/PhotoAlbum" element={<PhotoAlbum />} />
        <Route path="/UserList" element={<UserList />} />
      </Routes>
    </Router>
  )
}

export default App
