import React from 'react'
import PropTypes from 'prop-types'

import Svg from '../../helpers/Svg'

const SettingsIcon = ({ fill }) => (
  <Svg
    viewBox="0 0 14 14"
    title="o-icon__settings"
    className={fill}
    fill="#808080"
  >
    <path d="M12.767 8.343c-0.735-1.272-0.293-2.903 0.986-3.643l-1.376-2.383c-0.393 0.23-0.85 0.363-1.338 0.363-1.47 0-2.662-1.2-2.662-2.68h-2.752c0.004 0.457-0.11 0.92-0.355 1.343-0.735 1.272-2.367 1.705-3.649 0.967l-1.376 2.383c0.396 0.225 0.739 0.555 0.983 0.977 0.733 1.27 0.294 2.897-0.98 3.64l1.376 2.383c0.392-0.228 0.847-0.359 1.332-0.359 1.466 0 2.654 1.192 2.662 2.665h2.752c-0.001-0.452 0.113-0.91 0.355-1.329 0.733-1.27 2.362-1.703 3.642-0.971l1.376-2.383c-0.393-0.225-0.734-0.554-0.977-0.974zM7 9.835c-1.566 0-2.835-1.269-2.835-2.835s1.269-2.835 2.835-2.835c1.566 0 2.835 1.269 2.835 2.835s-1.269 2.835-2.835 2.835z" />
  </Svg>
)

SettingsIcon.propTypes = {
  fill: PropTypes.string,
}

export default SettingsIcon
