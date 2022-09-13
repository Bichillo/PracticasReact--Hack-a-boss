import { NavLink } from 'react-router-dom';
import UserSection from './UserSection';

function Header() {
  return (
    <header>
      <h1>MyApp</h1>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Acerca de</NavLink>
        <NavLink to="/catalog">Catálogo</NavLink>
        <NavLink to="/characters">Personajes</NavLink>
      </div>
      <UserSection />
    </header>
  )
}

export default Header
