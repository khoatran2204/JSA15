let Username = document.getElementById('Username')
let Password = document.getElementById('Password')
let CPassword = document.getElementById('CPassword')
let button = document.getElementById('button')

let Info = []

button.addEventListener('click', (event) =>{
    event.preventDefault()
    addinfo()
})

const addinfo = () => {
    const newUser = Username.value
    const newPass = Password.value 
    if (!newUser || !newPass || !CPassword.value) return console.log("Nhập vô đi rồi add") || alert("Nhập vô đi rồi add") 
    if (newPass != CPassword.value) return console.log("Pass sai")
    Info.push({
        user: newUser,
        pass: newPass
    })  
    localStorage.setItem('infos', JSON.stringify(Info))
}

button.addEventListener('click', () =>{
    infoList = JSON.parse(localStorage.getItem('todos')) || []
    const User = Username.value
    const Pass = Password.value
    console.log(User)
    console.log(Pass)
    for (let i = 0; i < infoList.length; i++){
        if (Pass == infoList[i].pass) and (User == infoList[i].user) 
        alert("đăng nhập thành công")
    }
})

