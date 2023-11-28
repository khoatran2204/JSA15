const submit = document.getElementById('signin-button');

submit.addEventListener('click', (event) => {
    event.preventDefault();
    
    const username = document.getElementById('signin-username').value;
    const password = document.getElementById('signin-password').value;
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    console.log(users)
    for (let i = 0; i < users.length; i++) {
        if (users[i].username == username && users[i].password == password) {
            localStorage.setItem('currentUser', JSON.stringify(users[i]));
            window.location.href = 'index.html';
            return;
        }
    }
    document.getElementById('signin-error').innerHTML = 'Username or password is incorrect';
});