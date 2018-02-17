const inputs = document.querySelectorAll('.color-box > input')
const root = document.documentElement
const range = document.querySelector('.booth-slider')

//as slider range's value changes, do something
range.addEventListener('input', handleSlider)

//as the value in the input changes, do something.
inputs.forEach(input => {
  input.addEventListener('input', handleInputChange)
})

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
