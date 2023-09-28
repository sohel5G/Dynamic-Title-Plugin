
import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>

      <nav>
        <li> <Link to={'/'}>Home</Link> </li>
        <li> <Link to={'/about'}>About</Link> </li>
        <li> <Link to={'/contact'}>Contact</Link> </li>
        <li> <Link to={'/single'} state={'Single Page products title'}> single page </Link> </li>
      </nav>

      <Outlet></Outlet>

    </>
  )
}

export default App
