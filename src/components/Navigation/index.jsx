import './index.scss'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <>
      <nav className="nav-container">
        <ul className="navMain">
          <li className="navMain__element">
            <NavLink to="/accueil" className={'fontSize-subtitle'}>
              Accueil
            </NavLink>
          </li>
          <li className="navMain__element">
            <NavLink to="/aPropos" className={'fontSize-subtitle'}>
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}
