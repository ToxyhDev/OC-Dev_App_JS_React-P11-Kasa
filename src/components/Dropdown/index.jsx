import PropTypes from 'prop-types'
import { useState } from 'react'

export default function Dropdown({ title, content, key }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="dropdown">
        <button
          className="dropdown__title"
          role="combobox"
          onClick={toggleDropdown}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              toggleDropdown()
            }
          }}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-controls={`dropdown__content${key}`}
        >
          {title}
        </button>
        <DropdownContent content={content} state={isOpen} index={key} />
      </div>
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
        <ul id={`dropdown__content${index}`} className="dropdown__content">
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
  key: PropTypes.string.isRequired,
}

DropdownContent.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  state: PropTypes.bool.isRequired,
  index: PropTypes.string.isRequired,
}
