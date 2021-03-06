import React from 'react'
import PropTypes from 'prop-types'

import { Article, Div, Section } from '../helpers/Element'
import Aside from '../organisms/asides/Aside'
import BreakoutBlock from '../molecules/blocks/BreakoutBlock'
import PageContent from '../organisms/content/PageContent'
import PageHeader from '../organisms/sections/PageHeader'
import RelatedPosts from '../organisms/asides/RelatedPosts'
import Main from './Main'
import TemplateWrap from './TemplateWrap'

function BasicPage({
  aside,
  breadcrumbs,
  breakout,
  content,
  pageHeader,
  relatedPosts,
  ...templateProps
}) {
  const hasSidebar = aside || breakout || relatedPosts

  return (
    <TemplateWrap {...templateProps}>
      <Main>
        <PageHeader {...pageHeader} />
        <Section
          className="l-main__content"
          gridWrap="6"
          id="top"
          paddingSize="zero"
          paddingSide="sides"
          seven
          shiftSide="left"
          shiftAt={hasSidebar ? 'xxlarge' : 'large'}
          spacingSize="double"
          spacingUntil="xxlarge"
        >
          <Article
            className="c-article"
            gridItemSizeAtL={4}
            gridItemSizeAtXL={hasSidebar ? 3 : null}
          >
            <Div className="c-article__body">
              <PageContent breadcrumbs={breadcrumbs}>{content}</PageContent>
            </Div>
          </Article>
          {hasSidebar && (
            <Div
              className="c-sidebar"
              gridItemSizeAtL={2}
              gridItemSizeAtXL={2}
              paddingSize="zero"
              paddingSide="sides"
              spacing
            >
              {breakout && <BreakoutBlock {...breakout} />}
              {aside && <Aside {...aside} />}
              {relatedPosts && <RelatedPosts {...relatedPosts} />}
            </Div>
          )}
        </Section>
      </Main>
    </TemplateWrap>
  )
}

BasicPage.propTypes = {
  aside: PropTypes.object,
  breadcrumbs: PageContent.propTypes.breadcrumbs,
  breakout: PropTypes.shape(BreakoutBlock.propTypes),
  content: PropTypes.node.isRequired,
  pageHeader: PropTypes.shape(PageHeader.propTypes).isRequired,
  relatedPosts: PropTypes.oneOfType([PropTypes.element]),
  ...TemplateWrap.propTypes,
}
BasicPage.defaultProps = {
  breadcrumbs: [],
}

export default BasicPage
