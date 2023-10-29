import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom'

export default function ErrorPage() {
  let error = useRouteError()
  console.log(error)
  return (
    <>
      <section>
        <h2>{error.status}</h2>
        {error && isRouteErrorResponse(error) ? (
          <>
            {error.status === 404 && (
              <div>Oups! La page que vous demandez n&apos;existe pas.</div>
            )}
            {error.status === 401 && (
              <div>Oups! Vous n&apos;êtes pas autorisés à voir ça.</div>
            )}
            {error.status === 503 && (
              <div>Oups! On dirait que notre API est en panne</div>
            )}
            {error.status === 418 && <div>🫖</div>}
          </>
        ) : (
          <div>Oups! Quelque chose s&apos;est mal passé</div>
        )}
        <Link to="/accueil">Retourner sur la page d&apos;accueil</Link>
      </section>
    </>
  )
}
