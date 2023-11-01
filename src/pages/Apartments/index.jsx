import { useNavigate, useParams } from 'react-router-dom'

import data from '../../data/apartments.json'
import { useEffect, useState } from 'react'
import Dropdown from '../../components/Dropdown'
import { ReactComponent as Star } from '../../assets/star-icon.svg'

export default function Apartments() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [apartment, setApartment] = useState(null)

  useEffect(() => {
    const checked = data.find((element) => element.id === id)
    if (checked === undefined) {
      navigate('/erreur-logement')
    } else {
      console.log(checked)
      setApartment(checked)
    }
  }, [id, navigate])

  return (
    <>
      {apartment === null ? (
        <p>Chargement en cours {console.log('test')}</p>
      ) : (
        <main className="apartment-main">
          <article className="apartment">
            <p>BANNIERE</p>
            <div className="apartment__header">
              <section className="apartment__announce">
                <h2 className="apartment__title fontSize-title">
                  {apartment.title}
                </h2>
                <p className="apartment__city fontSize-paragraph">
                  {apartment.location}
                </p>
                <ul className="apartment__tags">
                  {apartment.tags.map((element, index) => (
                    <li key={index} className="apartment__tag">
                      {element}
                    </li>
                  ))}
                </ul>
              </section>
              <div className="apartment__profil">
                <section className="apartment__user">
                  <h3 className="apartment__name fontSize-paragraph2">
                    {apartment.host.name}
                  </h3>
                  <img
                    className="apartment__imgProfil"
                    src={apartment.host.picture}
                    alt={`Photo de ${apartment.host.name}`}
                  />
                </section>
                <ul className="apartment__rates">
                  {Array(5)
                    .fill(null)
                    .map((_, index) => (
                      <li
                        key={index}
                        className={` apartment__star
                        ${
                          index < apartment.rating
                            ? 'apartment__star--active'
                            : 'apartment__star--disable'
                        } `}
                      >
                        <Star />
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="apartment__dropdowns">
              <Dropdown
                customKey={0}
                title={'Description'}
                content={apartment.description}
              />
              <Dropdown
                customKey={1}
                title={'Équipements'}
                content={apartment.equipments}
              />
            </div>
          </article>
        </main>
      )}
    </>
  )
}
