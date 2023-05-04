import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react'
export default function Header() {
  const [username,setUserName] = useState(null);
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserName(userInfo.username);
      })
    })
  },[])
  return (
    <header>
      <Link to='/' className="logo">MyBlog</Link>
      <nav>
        {username && (
          <>
            <Link to='/create'>Create new post</Link>
          </>
        )}
        {!username && (
          <>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </>
        )}
      </nav>
    </header>
  )
}