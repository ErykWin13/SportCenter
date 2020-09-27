const buyButtons = document.querySelectorAll('.all-offers button')


buyButtons.forEach((button) => {
    button.addEventListener('click', function () {
        if (button.dataset.number === '1') {
            alert('Kupiłeś karnet klasyczny!')
        } else if (button.dataset.number === '2') {
            alert('Kupiłeś karnet premium!')
        } else if (button.dataset.number === '3') {
            alert('Kupiłeś karnet VIP!')
        }
    })
})