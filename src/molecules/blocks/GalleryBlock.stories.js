import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, object } from '@storybook/addon-knobs'

import GalleryBlock from './GalleryBlock'

const defaults = {
  kicker: 'The General Conference.',
  title: 'Coordinates the global ministry of the Seventh-day Adventist Church.',
  description:
    'Is responsible for the spiritual and developmental plans of the church around the world.',
  images: [
    {
      srcSet: {
        default: '//picsum.photos/500/282?image=1067',
        500: '//picsum.photos/900/507',
        750: '//picsum.photos/700/395',
        1200: '//picsum.photos/500/282',
      },
      alt: 'Random image',
      caption: 'Nam pretium et mauris sit amet vehicula.',
    },
    {
      srcSet: {
        default: '//picsum.photos/500/282?image=464',
        500: '//picsum.photos/900/507',
        750: '//picsum.photos/700/395',
        1200: '//picsum.photos/500/282',
      },
      alt: 'First image',
      caption: 'Morbi at est tristique.',
    },
    {
      srcSet: {
        default: '//picsum.photos/500/700?image=534',
        500: '//picsum.photos/300/400',
        750: '//picsum.photos/450/600',
        1200: '//picsum.photos/600/800',
      },
      alt: 'Second image portrait',
      caption: 'Duis eu pharetra magna.',
      portrait: true,
    },
    {
      srcSet: {
        default: '//picsum.photos/500/282?image=201',
        500: '//picsum.photos/900/507',
        750: '//picsum.photos/700/395',
        1200: '//picsum.photos/500/282',
      },
      alt: 'Third image',
      caption: 'Curabitur vulputate mattis dignissim.',
    },
  ],
}

storiesOf('molecules/blocks/GalleryBlock', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const kicker = text('Kicker', defaults.kicker)
    const title = text('Title', defaults.title)
    const images = object('Image SrcSet', defaults.images)
    return <GalleryBlock images={images} kicker={kicker} title={title} />
  })
