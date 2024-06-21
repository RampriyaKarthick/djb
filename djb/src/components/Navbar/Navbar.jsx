
import { Link, useLocation } from 'react-router-dom';
import djLogo from '../../assets/Dj.png';  
import './Navbar.css'

const Navigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={djLogo} alt="dj-logo" />
      </div>
      <div className="navbar-links">
        {currentPath !== '/' && (
          <Link to="/">UserList</Link>
        )}
      
        {currentPath !== '/PhotoAlbum' && (
          <Link to="/PhotoAlbum">PhotoAlbum</Link>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
