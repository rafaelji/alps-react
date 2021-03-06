import React from 'react'
import PropTypes from 'prop-types'

import Element from '../../helpers/Element'
import Kicker from './Kicker'

function Title({ children, kicker, kickerColor, text, ...props }) {
  return (
    <Element {...props}>
      {kicker && <Kicker text={kicker} color={kickerColor} />}{' '}
      {text || children}
    </Element>
  )
}

Title.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  className: PropTypes.string,
  children: PropTypes.node,
  kicker: PropTypes.string,
  kickerColor: Kicker.propTypes.color,
  text: PropTypes.string,
  ...Element.propTypes,
}
Title.defaultProps = {
  as: 'h2',
  fontSize: 's',
  fontType: 'primary',
  themeColor: 'darker',
}

export default Title
