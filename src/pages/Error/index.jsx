import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <>
      <section>
        <h2>404</h2>
        <p>Oups! La page que vous demandez n&apos;existe pas.</p>
        <Link to="/accueil">Retourner sur la page d&apos;accueil</Link>
      </section>
    </>
  )
}
