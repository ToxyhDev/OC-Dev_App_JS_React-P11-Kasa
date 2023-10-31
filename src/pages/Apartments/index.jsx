import { useNavigate, useParams } from 'react-router-dom'

import data from '../../data/apartments.json'
import { useEffect } from 'react'

function checkIdLocation(id) {
  const checked = data.find((element) => element.id === id)
  if (checked === undefined) {
    return true
  } else {
    return false
  }
}

export default function Apartments() {
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (checkIdLocation(id)) {
      //renvoi sur une url incconu pour indiquer une erreur
      navigate('/erreur-logement')
    }
  }, [id, navigate])

  return (
    <>
      <p>Appartement {id}</p>
    </>
  )
}
