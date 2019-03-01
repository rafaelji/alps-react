import range from '../../helpers/range'
const gridClass = 'l-grid'
const col = 'col'

const sevenClass = `${gridClass}--7${col}`
const sevenInnerClass = `${sevenClass}--inner` // Class is available in CSS, but not not used in twig/json templates
const wrapClass = `${gridClass}-wrap`
const itemClass = `${gridClass}-item`

const shiftClass = 'u-shift'
const shiftSides = ['left', 'right']
const shiftBreakpoints = ['medium', 'standard', 'large', 'xxlarge']

const noGuttersClass = 'u-no-gutters'

const wrapSizes = range(1, 7).map(s => `${s}`)

// Example: {side: 'left', breakpoint: 'xxlarge'} => 'u-shift--left--1-col--at-xxlarge'
function getShiftClass(side, at) {
  return `${shiftClass}--${side}--1-${col}--${
    at === 'standard' ? at : `at-${at}`
  } ` // TODO: Ask if, to avoid this special case, `.u-shift--left--1-col--standard` is meant used, and if can be renamed to a more "standard" name like `.u-shift--left--1-col--at-standard` (note the added `at`).
}

function getGridWrapClass(size) {
  return `${wrapClass} ${
    typeof size === 'string' && wrapSizes.includes(size)
      ? `${wrapClass}--${size}-of-7`
      : ''
  }`
}

function getGridClass({
  className,
  noGutters,
  seven,
  sevenInner,
  shiftSide,
  shiftAt,
  wrap,
}) {
  const classes = [gridClass]

  if (className) classes.push(className)
  if (seven) classes.push(sevenClass)
  if (sevenInner) classes.push(sevenInnerClass)
  if (noGutters) classes.push(noGuttersClass)
  if (wrap) classes.push(getGridWrapClass(wrap))
  if (shiftSide && shiftAt) classes.push(getShiftClass(shiftSide, shiftAt))

  return classes.join(' ')
}

function getGridItemClass({
  className,
  size,
  sizeAtL,
  sizeAtM,
  sizeAtS,
  sizeAtXL,
}) {
  const classes = [itemClass]

  const sizes = []

  if (size) sizes.push({ size }) // default "at" would be "xs", but it's not present in ALPS
  if (sizeAtS) sizes.push({ size: sizeAtS, at: 's' })
  if (sizeAtM) sizes.push({ size: sizeAtM, at: 'm' })
  if (sizeAtL) sizes.push({ size: sizeAtL, at: 'l' })
  if (sizeAtXL) sizes.push({ size: sizeAtXL, at: 'xl' })

  for (const { at, size } of sizes) {
    classes.push(
      `${itemClass}${at ? `--${at}` : ''}--${
        wrapSizes.includes(size) ? `${size}-${col}` : ''
      }`
    )
  }

  if (className) classes.push(className)

  return classes.join(' ')
}

export {
  getGridClass,
  getGridItemClass,
  getGridWrapClass,
  sevenClass,
  shiftBreakpoints,
  shiftSides,
  wrapSizes,
}
