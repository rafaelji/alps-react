import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'

import Byline from './Byline'

import data from './Byline.stories.json'

const propsTab = 'Props'

storiesOf('molecules/text/Byline', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const textValue = text('Byline *', data.textValue, propsTab)
    return <Byline>{textValue}</Byline>
  })
