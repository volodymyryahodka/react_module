import {useEffect, useState} from "react";

import {userService} from './services/user.service'
import Form from "./Components/Forms/Form";
import Users from "./Components/Users/Users";

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    userService.getAll().then(value => {
      setUsers([...value])
      setFilteredUsers([...value])
    })
  }, [])

  const getFilter = (data) => {
    let filterArray = [...users]

    if (data.name){
      filterArray = filterArray.filter(user => user.name.toLowerCase().includes(data.name.toLowerCase()))
    }
    if (data.username){
      filterArray = filterArray.filter(user => user.username.toLowerCase().includes(data.username.toLowerCase()))
    }
    if (data.email){
      filterArray = filterArray.filter(user => user.email.toLowerCase().includes(data.email.toLowerCase()))
    }
    setFilteredUsers(filterArray)
  }

  return (
    <div>
      <Form getFilter={getFilter}/>
      <Users users={filteredUsers}/>
    </div>
  );
}

export default App;
