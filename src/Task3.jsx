import { useEffect, useState } from "react";

export default function Task3() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
//   console.log(users);
  return (
    <div>
      {users.map((user) => {
        const { id, name, company, address } = user;
        return(
            <div key={id} className="card">
                <h2>{name}</h2>
                <h4>{company.name}</h4>
                <p>{address.city}</p>
            </div>
        )
      })}
    </div>
  );
}
