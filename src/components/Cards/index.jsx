import data from '../../data/apartments.json'
import Card from '../Card'

export default function Cards() {
  // console.log(data)
  return (
    <>
      <div className="cards-section">
        {data.map((element, index) => (
          <Card
            key={index}
            id={element.id}
            title={element.title}
            img={element.cover}
          />
        ))}
      </div>
    </>
  )
}
