import { PostFetch } from "../scripts/fetch.js"

const endpoint = 'users/login'

const Login = async () => {
    let email = document.querySelector("#email").value
    let password = document.querySelector('#password').value

    let data = {
      email: email,
      password: password
    }

    let token = await PostFetch(endpoint, data)
    console.log(token)

    localStorage.setItem('TOKEN', token)
}

let login_btn = document.querySelector('#login_btn')
login_btn.addEventListener('click', Login)
