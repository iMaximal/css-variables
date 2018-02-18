const root = document.documentElement
const range = document.querySelector('.booth-slider')

//as slider range's value changes, do something
range.addEventListener('input', handleSlider)

const boxesContainer = document.querySelector('.color-boxes')
boxesContainer.addEventListener('input', handleInputChange)

function handleInputChange (e) {
  const { value } = e.target
  const inputId = e.target.parentNode.id
  const inputBg = `--bg-${inputId}`
  root.style.setProperty(inputBg, value)
}

function handleSlider (e) {
  const { value } = e.target
  root.style.setProperty('--slider', value)
}
