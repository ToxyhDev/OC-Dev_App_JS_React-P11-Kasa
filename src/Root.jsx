import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function Root() {
  return (
    <>
      <ScrollToTop />
      <div className="body-container">
        <Header></Header>
        <Outlet />
      </div>
      <Footer></Footer>
    </>
  )
}
