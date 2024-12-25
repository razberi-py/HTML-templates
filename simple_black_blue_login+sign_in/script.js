// Tab Switching Logic
const loginTab = document.getElementById('login-tab');
const signupTab = document.getElementById('signup-tab');
const loginSection = document.getElementById('login-section');
const signupSection = document.getElementById('signup-section');
const switchToSignup = document.getElementById('switch-to-signup');
const switchToLogin = document.getElementById('switch-to-login');

// Toggle Tabs
loginTab.addEventListener('click', () => {
  loginTab.classList.add('active');
  signupTab.classList.remove('active');
  loginSection.classList.add('active');
  signupSection.classList.remove('active');
});

signupTab.addEventListener('click', () => {
  signupTab.classList.add('active');
  loginTab.classList.remove('active');
  signupSection.classList.add('active');
  loginSection.classList.remove('active');
});

// Switch Links
switchToSignup.addEventListener('click', (e) => {
  e.preventDefault();
  signupTab.click();
});

switchToLogin.addEventListener('click', (e) => {
  e.preventDefault();
  loginTab.click();
});
