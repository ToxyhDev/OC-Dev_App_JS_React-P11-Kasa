import { useParams } from 'react-router-dom'

export default function Apartments() {
  const { id } = useParams()
  return (
    <>
      <p>Appartement {id}</p>
    </>
  )
}
