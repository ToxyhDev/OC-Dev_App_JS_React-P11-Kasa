import { ReactComponent as Logo } from '../../assets/logo-secondary.svg'

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <Logo />
        <p className="fontSize-subtitle">
          &#169; 2020 Kasa. All rights Reserved
        </p>
      </footer>
    </>
  )
}
