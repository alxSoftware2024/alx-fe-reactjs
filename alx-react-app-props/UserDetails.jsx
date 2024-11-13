import react from 'react'
import { useContext } from 'react'
import {data} from '../App'
function UserDetails() {
  const user=useContext(data)
    return (
      <div>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    );
  }
  
  export default UserDetails;

