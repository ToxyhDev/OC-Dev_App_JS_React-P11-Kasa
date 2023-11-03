import './index.scss'
import data from '../../data/apartments.json'
import Card from '../Card'
import { Link } from 'react-router-dom'

export default function Cards() {
  // console.log(data)
  return (
    <>
      <ul className="cards-section">
        {data.map((element, index) => (
          <Card
            key={index}
            id={element.id}
            title={element.title}
            img={element.cover}
          />
        ))}
        <li className="card">
          <Link to={`/logement/falseId`} className="card__link">
            <h2 className="card__title">Exemple génère erreur</h2>
          </Link>
        </li>
      </ul>
    </>
  )
}
