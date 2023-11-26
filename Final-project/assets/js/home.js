function checkLoginStatus() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    const logoutButton = document.getElementById('logout');
    if (currentUser) {
        logoutButton.style.display = 'block';
    } else {
        logoutButton.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', checkLoginStatus);

document.getElementById('logout').addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    checkLoginStatus();
    window.location.href = 'index.html';
});