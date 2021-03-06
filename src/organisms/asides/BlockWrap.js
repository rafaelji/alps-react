import React from 'react'
import PropTypes from 'prop-types'

import MediaBlock from '../../molecules/blocks/MediaBlock'
import HeadingBlock from '../../molecules/blocks/HeadingBlock'
import ContentBlock from '../../molecules/blocks/ContentBlock'
import renderItems from '../../helpers/renderItems'
import { Div } from '../../helpers/Element'

function BlockWrap({ blocks, heading, linkText, type, url }) {
  const wrapperClass =
    type == 'relatedPosts' ? 'c-related-posts' : 'c-block-wrap'

  const blockProps =
    type == 'relatedPosts'
      ? { reversed: true }
      : type === 'mediaBlock'
      ? { type: 'stacked', border: 'left' }
      : {}

  return (
    <Div className={wrapperClass} spacing>
      <HeadingBlock title={heading} linkText={linkText} url={url} />
      <Div className={`${wrapperClass}__content`} spacing>
        {renderItems(
          blocks,
          type == 'contentBlock' ? ContentBlock : MediaBlock,
          blockProps
        )}
      </Div>
    </Div>
  )
}

BlockWrap.propTypes = {
  blocks: PropTypes.array,
  heading: PropTypes.string,
  linkText: PropTypes.string,
  type: PropTypes.oneOf(['mediaBlock', 'contentBlock', 'relatedPosts']),
  url: PropTypes.string,
}
BlockWrap.defaultProps = {
  type: 'mediaBlock',
  blocks: [],
}

export default BlockWrap
