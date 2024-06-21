import  { useEffect, useState } from 'react';
import '../UserList/UserList.css'

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  

  return (
    <div className="main-table">
    <h1>User List</h1>
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Website</th>
          <th>Company Name</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td data-label="Username">
        {user.username}</td>
            <td data-label="Email">{user.email}</td>
            <td data-label="Website">
              <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">
                {user.website}
              </a>
            </td>
            <td data-label="Company Name">{user.company.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default UserList;
