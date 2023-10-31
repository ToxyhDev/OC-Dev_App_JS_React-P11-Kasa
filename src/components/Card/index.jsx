import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Card({ id, title, img }) {
  return (
    <>
      <Link to={`/logement/${id}`}>
        <article className="card">
          <img className="card__img" src={img} alt={title} />
          <h2 className="card__title">{title}</h2>
        </article>
      </Link>
    </>
  )
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
}
