const output = document.querySelector('#output')

const clearButton = document.querySelector('#clear')
clearButton.addEventListener('click', function() {
  output.innerText = ""
})

const sevenButton = document.querySelector('#seven')
sevenButton.addEventListener('click', function() {
    output.innerText += "7"
})

const eightButton = document.querySelector('#eight')
eightButton.addEventListener('click', function() {
  output.innerText += "8"
})

const nineButton = document.querySelector('#nine')
nineButton.addEventListener('click', function() {
  output.innerText += "9"
})

const fourButton = document.querySelector('#four')
fourButton.addEventListener('click', function() {
  output.innerText += "4"
})

const fiveButton = document.querySelector('#five')
fiveButton.addEventListener('click', function() {
  output.innerText += "5"
})

const sixButton = document.querySelector('#six')
sixButton.addEventListener('click', function() {
  output.innerText += "6"
})

const oneButton = document.querySelector('#one')
oneButton.addEventListener('click', function() {
  output.innerText += "1"
})

const twoButton = document.querySelector('#two')
twoButton.addEventListener('click', function() {
  output.innerText += "2"
})

const threeButton = document.querySelector('#three')
threeButton.addEventListener('click', function() {
  output.innerText += "3"
})

const zeroButton = document.querySelector('#zero')
zeroButton.addEventListener('click', function() {
  output.innerText += "0"
})


const divideButton = document.querySelector('#divide')
divideButton.addEventListener('click', function() {
  output.innerText += "/"
})

const multiplyButton = document.querySelector('#multiply')
multiplyButton.addEventListener('click', function() {
  output.innerText += "x"
})

const addButton = document.querySelector('#add')
addButton.addEventListener('click', function() {
  output.innerText += "+"
})

const subtractButton = document.querySelector('#subtract')
subtractButton.addEventListener('click', function() {
  output.innerText += "-"
})

const decimalButton = document.querySelector('#dot')
decimalButton.addEventListener('click', function() {
  output.innerText += "."
})

const equalsButton = document.querySelector('#equals')
equalsButton.addEventListener('click', function() {
  output.innerText = eval(output.innerText)
})






