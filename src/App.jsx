
import { Link, Outlet, useLocation } from 'react-router-dom'
import './App.css'
import { useEffect } from 'react';

function App() {

  const location = useLocation()

  useEffect(() => {
    location.pathname === '/' ? 
    document.title = `Title - Home` : 
    document.title = `Title ${location.pathname.replace('/', '- ')}`;

    location.state ? document.title = `Title - ${location.state}` : ''
  }, [location])

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
