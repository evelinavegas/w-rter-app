import{arrContent, } from "./arr.js"
const list = document.querySelector('#list-wrapp')
const contentBlock = document.querySelector('.content-wrapp')
const btnDown = document.querySelector('#btn-down')
let listArr = ['verben', 'adjectives', 'nomen', 'autofahren', 'natur' ,'ausgewählt',]
listArr.forEach(e => {
  let listBtn = document.createElement('div')
  listBtn.classList.add('list-btn')
  listBtn.setAttribute('data-id', `${e}`)
  listBtn.textContent = `${e}`
  list.appendChild(listBtn)
})

function addEllement(htmlBlock, className) {
  let element = document.createElement(htmlBlock)
  element.classList.add(className)
  return element
}

let keyArr = []
let valueArr = []
list.addEventListener('click', e => {
    e.preventDefault()
    list.classList.add('close')
    btnDown.classList.remove('rotate180')
    let listId = e.target.dataset.id
    let selectArr = arrContent[listId]
    keyArr = Object.keys(selectArr)
    valueArr = Object.values(selectArr)
    contentBlock.innerHTML = ''
    for (let i = 0; i < keyArr.length; i++) {
        let arrElement = addEllement('div', 'content-el')
        arrElement.textContent = `${keyArr[i]}`
        contentBlock.appendChild(arrElement)
    }
})
btnDown.addEventListener('click', e=>{
    e.preventDefault()
    list.classList.contains('close')?list.classList.remove('close'):list.classList.add('close')

    btnDown.classList.contains('rotate180')?btnDown.classList.remove('rotate180'):btnDown.classList.add('rotate180')
})
contentBlock.addEventListener('click', e => {
  e.preventDefault()
  list.classList.add('close')
  btnDown.classList.add('rotate180')

  let eTarget = e.target
  let targetContent = e.target.textContent
  eTarget.classList.contains('content-el') ? eTarget.classList.add('bg-active'): null
  let indexKey = keyArr.indexOf(targetContent)
  let indexValue = valueArr.indexOf(targetContent)

  if (targetContent == keyArr[indexKey]) {
      arrContent.ausgewählt[targetContent] = valueArr[indexKey]
      eTarget.textContent = `${valueArr[indexKey]}`
  } else if (targetContent == valueArr[indexValue]) {
      eTarget.textContent = `${keyArr[indexValue]}`
  }
})
