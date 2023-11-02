import './index.scss'
import data from '../../data/apartments.json'
import Card from '../Card'

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
      </ul>
    </>
  )
}
