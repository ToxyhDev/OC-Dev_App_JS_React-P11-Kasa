import './index.scss'
import PropTypes from 'prop-types'
import { useState } from 'react'

export default function Dropdown({ customKey, title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <li className="dropdown">
        <button
          className="dropdown__title"
          role="combobox"
          onClick={toggleDropdown}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-controls={`dropdown__content${customKey}`}
        >
          {title}
          <span
            className={`dropdown__title--arrow ${isOpen ? 'open' : ''}`}
          ></span>
        </button>

        {children({ isOpen, customKey })}
      </li>
    </>
  )
}

Dropdown.propTypes = {
  title: PropTypes.string,
  customKey: PropTypes.number.isRequired,
  children: PropTypes.func,
}
