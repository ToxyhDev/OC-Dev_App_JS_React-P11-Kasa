import PropTypes from 'prop-types'
import { useState } from 'react'

export default function Carousel({ images, classImg }) {
  const [numeroImg, setNumeroImg] = useState(0)
  const totalImg = images.length - 1

  function nextImg() {
    const newNumeroImg = numeroImg + 1
    if (newNumeroImg > totalImg) {
      setNumeroImg(0)
    } else {
      setNumeroImg(newNumeroImg)
    }
  }
  function prevImg() {
    const newNumeroImg = numeroImg - 1
    if (newNumeroImg < 0) {
      setNumeroImg(totalImg)
    } else {
      setNumeroImg(newNumeroImg)
    }
  }

  const handleKeyDown = (event) => {
    document.querySelector('.carousel').focus()

    setTimeout(() => {
      if (event.key === 'ArrowLeft' || event.keyCode === 37) {
        prevImg()
      } else if (event.key === 'ArrowRight' || event.keyCode === 39) {
        nextImg()
      }
    }, 300)
  }

  return (
    <>
      <div className="carousel" onKeyDown={handleKeyDown} tabIndex="0">
        <button
          className="carousel__btn carousel__btn--prev"
          onClick={() => prevImg()}
        >
          <span className="sr-only">Image précédente</span>
        </button>
        <button
          className="carousel__btn carousel__btn--next"
          onClick={() => nextImg()}
        >
          <span className="sr-only">Image suivante</span>
        </button>
        <img className={classImg} src={images[numeroImg]} alt="" />
        <span className="carousel__index">{`${numeroImg + 1}/${
          totalImg + 1
        }`}</span>
      </div>
    </>
  )
}

Carousel.propTypes = {
  images: PropTypes.array,
  classImg: PropTypes.string,
}
