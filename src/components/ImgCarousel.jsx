import React, { useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

const ImgCarousel = ({ data, full }) => {
  const [selected, setSelected] = useState(0);
  const type = (full ? 'product' : 'carousel');
  const indicators = (full ? 'product__indicators' : 'indicators');

  const moveRight = () => {
    setSelected(selected === data.length - 1 ? 0 : selected + 1)
  }

  const moveLeft = () => {
    setSelected(selected === 0 ? data.length - 1 : selected - 1)
  }
  return (
    <div className={type}>
      <BsArrowLeftCircleFill onClick={moveLeft} className={`${type}__arrow ${type}__arrow-left`} />
      {data.map((image, i) => (
        <img
          src={image}
          alt={`imageNumber${i}`}
          className={`card__image ${type}__img ${selected !== i ? 'hidden' : ''}`}
          key={i}
        />
      ))}
      <BsArrowRightCircleFill onClick={moveRight} className={`${type}__arrow ${type}__arrow-right`}/>
      <span className={indicators}>
        {data.map((_, i) => (
          <label className={`indicator ${selected === i ? 'indicator__selected' : ''}`}>
            <button
            key={i}
            onClick={() => {
              setSelected(i)
            }}
            className='hidden'
          ></button>
          </label>
        ))}
      </span>
    </div>
  )
}

export default ImgCarousel
