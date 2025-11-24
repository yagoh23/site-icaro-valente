const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');

const container = document.querySelector('.container');
const list = document.querySelector('.list');
const thumb = document.querySelector('.thumb');

// Eventos dos botões
btnNext.addEventListener('click', () => moveSlider('next'));
btnPrev.addEventListener('click', () => moveSlider('prev'));

function moveSlider(direction) {
    const listItems = list.querySelectorAll('.list-item');
    const thumbItems = thumb.querySelectorAll('.thumb-item');

    const firstListItem = listItems[0];
    const lastListItem = listItems[listItems.length - 1];

    const firstThumb = thumbItems[0];
    const lastThumb = thumbItems[thumbItems.length - 1];

    if (direction === 'next') {
        list.appendChild(firstListItem);
        thumb.appendChild(firstThumb);
        triggerAnimation('next');
    } else {
        list.prepend(lastListItem);
        thumb.prepend(lastThumb);
        triggerAnimation('prev');
    }
}

function triggerAnimation(type) {
    container.classList.add(type);

    setTimeout(() => {
        container.classList.remove('next', 'prev');
    }, 2000);
}
