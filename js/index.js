import arrContent from "./arr.js"
const list = document.querySelector('.list-wrapp')
const contentBlock = document.querySelector('.content-wrapp')
let listArr = ['verben', 'adjectives', 'nomen', 'ausgewählt']
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

//  додавання блоків німецькою
let listId = ''
let keyArr = []
let valueArr = []
list.addEventListener('click', e => {
    e.preventDefault()
    listId = e.target.dataset.id
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
// додавання перекладу
contentBlock.addEventListener('click', e => {
    e.preventDefault()
    let eTarget = e.target
    let targetContent = e.target.textContent
    eTarget.classList.add('bg-active')
    let indexKey = keyArr.indexOf(targetContent)
    let indexValue = valueArr.indexOf(targetContent)

    if (targetContent == keyArr[indexKey]) {
        arrContent.ausgewählt[targetContent] = valueArr[indexKey]
        eTarget.textContent = `${valueArr[indexKey]}`
    } else if (targetContent == valueArr[indexValue]) {
        eTarget.textContent = `${keyArr[indexValue]}`
    }
})
