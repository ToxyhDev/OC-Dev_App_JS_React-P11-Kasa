import './index.scss'
import PropTypes from 'prop-types'
import { useState } from 'react'

export default function Dropdown({ customKey, title, content }) {
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

        <DropdownContent content={content} state={isOpen} index={customKey} />
      </li>
    </>
  )
}

function DropdownContent({ content, state, index }) {
  if (typeof content === 'string') {
    return (
      <>
        <div
          id={`dropdown__content${index}`}
          className={`dropdown__content ${state ? 'open' : ''}`}
        >
          <p>{content}</p>
        </div>
      </>
    )
  } else if (Array.isArray(content)) {
    return (
      <>
        <ul
          id={`dropdown__content${index}`}
          className={`dropdown__content ${state ? 'open' : ''}`}
        >
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </>
    )
  } else {
    throw new Error('Contenu du Dropdown non pris en charge')
  }
}

Dropdown.propTypes = {
  title: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  customKey: PropTypes.number.isRequired,
}

DropdownContent.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  state: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
}
