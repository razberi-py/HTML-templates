// JavaScript for handling login and signup
function showSignup() {
    document.getElementById('login-form').classList.remove('active');
    document.getElementById('signup-form').classList.add('active');
}

function showLogin() {
    document.getElementById('signup-form').classList.remove('active');
    document.getElementById('login-form').classList.add('active');
}

function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    console.log(`Login Attempt - Username: ${username}, Password: ${password}`);
    alert('Login functionality to be implemented!');
}

function handleSignup(event) {
    event.preventDefault();
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    console.log(`Signup Attempt - Username: ${username}, Email: ${email}, Password: ${password}`);
    alert('Signup functionality to be implemented!');
}

// Set initial form to login
document.getElementById('login-form').classList.add('active');
