import { Link } from 'react-router'

function Navbar({ user, handleLogout }) {
  return (
    <nav>
      <Link to='/'>Homepage</Link>
      <Link to='/sayed-hameds'>All Sayed-Hameds</Link>
      <Link to='/sayed-hameds/create'>Create Sayed-Hamed</Link>
    </nav>
  )
}

export default Navbar