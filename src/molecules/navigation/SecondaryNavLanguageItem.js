import React from 'react'
import PropTypes from 'prop-types'

import Element from '../../helpers/Element'

function SecondaryNavLanguageItem({ label, languages }) {
  return (
    <li className="c-secondary-nav__list-item c-secondary-nav__list-item__language c-secondary-nav__list-item__toggle is-priority">
      <Element as="select" color="gray" fontType="secondary-nav">
        <option value="language" disabled>
          {label}
        </option>
        {Object.keys(languages).map(language => (
          <option value={language} key={language}>
            {languages[language]}
          </option>
        ))}
      </Element>
    </li>
  )
}

SecondaryNavLanguageItem.propTypes = {
  label: PropTypes.string,
  languages: PropTypes.object,
}
SecondaryNavLanguageItem.defaultProps = {
  label: 'Language',
  languages: {
    english: 'English',
    french: 'Français',
    german: 'Deutsch',
    spanish: 'Español',
    chineseTraditional: '中文',
    arabic: 'عربى',
  },
}

export default SecondaryNavLanguageItem
