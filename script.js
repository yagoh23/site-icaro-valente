let btnNext = document.querySelector('.next')
let btnPrev = document.querySelector('.prev')

let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let thumb = document.querySelector('.container .thumb')



btnNext.onclick = () => moveItemsOnClick('next')
btnPrev.onclick = () => moveItemsOnClick('prev')



function moveItemsOnClick(type) {

    let listItems = document.querySelectorAll('.list .list-item')
    let thumbItens = document.querySelectorAll('.thumb .thumb-item')

    console.log(listItems)
    console.log(thumbItens)


    if (type === 'next') {
        list.appendChild(listItems[0])
        thumb.appendChild(thumbItens[0])
        container.classList.add('next')

    } else {
        list.prepend(listItems[listItems.length - 1])
        thumb.prepend(thumbItens[thumbItens.length - 1])
        container.classList.add('prev')
    }

    setTimeout( () => {
        container.classList.remove('next')
        container.classList.remove('prev')
    }, 2000)
}

