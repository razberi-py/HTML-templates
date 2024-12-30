// Handle Tabs
function showLogin() {
    document.getElementById('login-tab').classList.add('active');
    document.getElementById('signup-tab').classList.remove('active');
    document.getElementById('login-form').classList.add('active');
    document.getElementById('signup-form').classList.remove('active');
}

function showSignup() {
    document.getElementById('signup-tab').classList.add('active');
    document.getElementById('login-tab').classList.remove('active');
    document.getElementById('signup-form').classList.add('active');
    document.getElementById('login-form').classList.remove('active');
}

// Handle Login Submission
function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    console.log(`Login Attempt - Username: ${username}, Password: ${password}`);
    alert('Login functionality is a placeholder!');
}

// Handle Signup Submission
function handleSignup(event) {
    event.preventDefault();
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    console.log(`Signup Attempt - Username: ${username}, Email: ${email}, Password: ${password}`);
    alert('Signup functionality is a placeholder!');
}
