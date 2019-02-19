import React from 'react'
import PropTypes from 'prop-types'

import { primary, secondary } from './atoms/global/colors'
import useDrawerContext from './helpers/useDrawerContext'

function Body({ children, primaryColor, secondaryColor, style }) {
  const { isOpen } = useDrawerContext()

  return (
    <div className={`u-theme--${primaryColor}`} style={style}>
      <div
        className={`body has-grid u-theme--${secondaryColor} ${
          isOpen.menu ? 'menu-is-active' : ''
        }`}
      >
        {children}
      </div>
    </div>
  )
}
Body.propTypes = {
  children: PropTypes.node,
  primaryColor: PropTypes.oneOf(primary),
  secondaryColor: PropTypes.oneOf(secondary),
  style: PropTypes.object,
}
Body.defaultProps = {
  primaryColor: 'ming',
  secondaryColor: '',
}
export default Body