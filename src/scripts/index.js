const fetchUserData = () => {
    const button = document.querySelector('.index__button')
    const input = document.querySelector('.index__input')

    button.addEventListener('click', async () => { 
        const res = await fetch(`https://api.github.com/users/${input.value}`)
        const data = await res.json()
        localStorage.setItem('githubUserInfo', JSON.stringify(data))
        if( await data.message == "Not Found") {
            window.location.href = "./src/pages/error.html"
        } else {
            window.location.href = "./src/pages/profile.html"
        }
        input.value = ""
    })
}

fetchUserData()