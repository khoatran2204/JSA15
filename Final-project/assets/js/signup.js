const submit = document.getElementById('signup-button');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    
    if (password !== confirmPassword) {
        document.getElementById('signup-error').innerHTML = 'Passwords do not match';
        return;
    }

    // Check if username already exists  
    const users = JSON.parse(localStorage.getItem('users')) || [];

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            document.getElementById('signup-error').innerHTML = 'Username already exists';
            return;
        }
    }

    users.push({
        username,
        password
    });
    localStorage.setItem('users', JSON.stringify(users));
});
