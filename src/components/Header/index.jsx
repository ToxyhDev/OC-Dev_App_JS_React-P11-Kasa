import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/accueil">Accueil</NavLink>
          <NavLink to="/aPropos">A Propos</NavLink>
        </nav>
      </header>
    </>
  )
}
