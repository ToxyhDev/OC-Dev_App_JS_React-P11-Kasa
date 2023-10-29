import { ReactComponent as Logo } from '../../assets/logo-primary.svg'
import Navigation from '../Navigation'

export default function Header() {
  return (
    <>
      <header className="header-main">
        <h1 className="sr-only">KASA</h1>
        <figure className="header-logo">
          <Logo />
          <figcaption className="sr-only">Logo de Kasa</figcaption>
        </figure>
        <Navigation />
      </header>
    </>
  )
}
