import axios from "axios";
import { useEffect, useState } from "react";

function User() {
  const [users, setUsers] = useState([]);

  useEffect(function () {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .then(() => console.log(users))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default User;
