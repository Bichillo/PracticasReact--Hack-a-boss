import { NavLink, Outlet } from "react-router-dom"

function About() {
  return (
    <div className="with-subsections">
      <aside>
        <ul>
          <li><NavLink to="/about" end>La empresa</NavLink></li>
          <li><NavLink to="/about/history">Nuestra historia</NavLink></li>
          <li><NavLink to="/about/contact">Contacto</NavLink></li>
        </ul>
      </aside>
      <Outlet />
    </div>
  )
}

export default About
