import{ useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FetchAlbs from "../../components/FetchAlbs/FetchAlbs"



function UserProfile() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="user-profile">
      <h1>User Profiles</h1>
      {users.map(user => (
        <div key={user.id} className="user-card">
          <h2>{user.name}</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <h3>Albums</h3>
          <ul>
          
            <FetchAlbs userId={user.id} />
          </ul>
          <Link to={`/UserProfile/${user.id}`}>View Profile</Link>
        </div>
      ))}
    </div>
  );
}


export default UserProfile;
