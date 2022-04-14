import React, { useState, useEffect} from 'react';
import PostDetail from './PostDetail';


function App() {
const [users, setUsers] = useState([]);
const [newId, setNewId] = useState(0);

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  .then((response) => response.json())
  .then((data) => setUsers(data))
  .catch((error) => {
    console.log(error)
  })
}, [])

return (
  <div>
    {users.map((user) => (
      <div>
        <h3 onClick={() => setNewId(user.id)}>{user.title}</h3>
        <p>{user.body}</p>
        {newId === user.id && <PostDetail postId={user.id} />}
      </div>
    ))}
  </div>
)




}

export default App;