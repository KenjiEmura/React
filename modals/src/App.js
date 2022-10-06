import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState(DUMMY_USERS);

  const addUserHandler = (createdUser) => {
    setUsersList((prevUsersList) => {
      return [createdUser, ...prevUsersList];
    });
    console.log(usersList);
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;

const DUMMY_USERS = [
  { id: "0", name: "Kenji Emura", age: 31 },
  { id: "1", name: "Hernando Rojas", age: 21 },
];
