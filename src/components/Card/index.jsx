import PropTypes from 'prop-types'

export default function Card({ title, img }) {
  return (
    <>
      <article className="card">
        <img className="card__img" src={img} alt={title} />
        <h2 className="card__title">{title}</h2>
      </article>
    </>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
}
