import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/buttons/Button'
import Picture from '../../atoms/images/Picture'
import { Div, HeadingTwo, HeadingThree } from '../../helpers/Element'

function Slide({
  heading,
  subtitle,
  dek,
  cta,
  url,
  image,
  imageIsLazy,
  className,
  textClass,
  ...others
}) {
  const classNames = ['c-carousel__item']
  if (className) classNames.push(className)

  const textClassNames = ['c-carousel__item-text']
  if (textClass) textClassNames.push(textClass)

  return (
    <Div className={classNames.join(' ')} position="relative" {...others}>
      <Picture image={image} lazy={imageIsLazy} />
      {heading && (
        <Div
          className="c-carousel__item-text__wrap"
          seven
          shiftSide="left"
          shiftAt="large"
        >
          <Div gridItemSizeAtM={4} gridItemSizeAtXL={3}>
            <Div
              className={textClassNames.join(' ')}
              paddingSide={['top', 'bottom']}
              paddingSize="double"
              spacing
            >
              <Div className="c-carousel__item-text--inner" spacingSize="half">
                <HeadingTwo
                  className="c-carousel__item-heading"
                  fontType="primary"
                  fontSize="xl"
                >
                  {heading}
                </HeadingTwo>
                {subtitle && (
                  <HeadingThree
                    className="c-carousel__item-subtitle"
                    fontType="secondary"
                    fontSize="s"
                    transform="upper"
                  >
                    <strong>{subtitle}</strong>
                  </HeadingThree>
                )}
                <div className="c-carousel__item-dek">
                  <p>{dek}</p>
                </div>
              </Div>
              {cta && url && (
                <Button
                  as="a"
                  className="c-carousel__item-cta"
                  href={url}
                  text={cta}
                />
              )}
            </Div>
          </Div>
        </Div>
      )}
    </Div>
  )
}

Slide.propTypes = {
  className: PropTypes.string,
  cta: PropTypes.string,
  dek: PropTypes.string,
  heading: PropTypes.string,
  image: Picture.propTypes.image.isRequired,
  imageIsLazy: Picture.propTypes.lazy,
  subtitle: PropTypes.string,
  textClass: PropTypes.string,
  url: PropTypes.string,
}

export default Slide
