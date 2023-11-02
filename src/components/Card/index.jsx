import './index.scss'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Card({ id, title, img }) {
  return (
    <>
      <li className="card">
        <Link to={`/logement/${id}`} className="card__link">
          <img className="card__img" src={img} alt={title} />
          <h2 className="card__title">{title}</h2>
        </Link>
      </li>
    </>
  )
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
}
