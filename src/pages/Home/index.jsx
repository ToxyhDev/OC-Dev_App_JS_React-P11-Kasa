import Banner from '../../components/Banner'
import Cards from '../../components/Cards'
import './index.scss'

const textBanner = 'Chez vous, partout et ailleurs'

export default function Home() {
  return (
    <>
      <main className="main-home">
        <Banner typeImg={'home'} text={textBanner} />
        <Cards />
      </main>
    </>
  )
}
