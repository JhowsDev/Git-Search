const getUserFromLocalStorage = () => {
    const userProfile = JSON.parse(localStorage.getItem('githubUserInfo'))
    return userProfile
}

const renderUserInfo = (obj) => {
    const profileImage = document.querySelector('.profile__image')
    const profileUsername = document.querySelector('.profile__username')
    const button = document.querySelector('.profile__change-user--button')
    
    profileImage.src = obj.avatar_url
    profileUsername.innerText = obj.login   

    button.addEventListener('click', () => {
        window.location.href = '../../index.html'
    })
}

renderUserInfo(getUserFromLocalStorage())

const renderUserRepos = async (obj) =>  {
    const ul = document.querySelector('.profile__ul')

    ul.innerHTML = ''

    const repositorios = await fetch(`https://api.github.com/users/${obj.login}/repos`).then (res => {
        return res.json()
    })

    repositorios.forEach(repo => {
        const li = document.createElement('li')
        const repoTitle = document.createElement('h4')
        const repoDisc = document.createElement('p')
        const repoAnchor = document.createElement('a')

        repoTitle.innerText = repo.name
        if(repo.description == null) {
            repoDisc.innerText = "Repositório sem descrição"
        } else {
            repoDisc.innerText = repo.description
        }
        repoAnchor.innerText =  "Repositório"
        repoAnchor.href = repo.html_url
        repoAnchor.target =  "_blank"

        li.append(repoTitle, repoDisc, repoAnchor)
        ul.appendChild(li)
    });
}

renderUserRepos(getUserFromLocalStorage())