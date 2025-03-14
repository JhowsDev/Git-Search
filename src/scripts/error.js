const redirectToHomePage = () => {
    const redirectButton = document.querySelector('.new-search__button')
    console.log(redirectButton)
    redirectButton.addEventListener('click', () => {
        window.location.href = '../../index.html'
    })
}

redirectToHomePage()