import PropTypes from 'prop-types'

export default function Banner({ typeImg, text }) {
  let classImg = 'banner__bgDefault'
  switch (typeImg) {
    case 'home':
      classImg = 'banner__bg1'
      break
    case 'aboutus':
      classImg = 'banner__bg2'
      break
  }
  return (
    <>
      <div className={`banner ${classImg}`}>
        {text ? <p className="banner__text">{text}</p> : ''}
      </div>
    </>
  )
}

Banner.propTypes = {
  typeImg: PropTypes.string,
  text: PropTypes.string,
}
