import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function ErrorPage() {
  let error = useRouteError()
  // console.log(error)
  return (
    <>
      <div className="body-container">
        <Header></Header>
        <main className="main-errorPage">
          <h2 className="errorPage__title">{error.status}</h2>
          {error && isRouteErrorResponse(error) ? (
            <>
              {error.status === 404 && (
                <p className="errorPage__msg fontSize-title">
                  Oups! La page que vous demandez n&apos;existe pas.
                </p>
              )}
              {error.status === 401 && (
                <p className="errorPage__msg fontSize-title">
                  Oups! Vous n&apos;êtes pas autorisés à voir ça.
                </p>
              )}
              {error.status === 503 && (
                <p className="errorPage__msg fontSize-title">
                  Oups! On dirait que notre API est en panne
                </p>
              )}
              {error.status === 418 && (
                <p className="errorPage__msg fontSize-title">🫖</p>
              )}
            </>
          ) : (
            <p className="errorPage__msg fontSize-title">
              Oups! Quelque chose s&apos;est mal passé
            </p>
          )}
          <Link className="errorPage__link fontSize-paragraph" to="/accueil">
            Retourner sur la page d&apos;accueil
          </Link>
        </main>
      </div>
      <Footer></Footer>
    </>
  )
}
