// Smooth transition between login and signup forms
function showSignUp() {
    const loginForm = document.getElementById('login-form');
    const signUpForm = document.getElementById('signup-form');
    loginForm.style.opacity = '0';
    setTimeout(() => {
        loginForm.style.display = 'none';
        signUpForm.style.display = 'block';
        signUpForm.style.opacity = '1';
    }, 300); // 300ms delay to match CSS transition
}

function showLogin() {
    const loginForm = document.getElementById('login-form');
    const signUpForm = document.getElementById('signup-form');
    signUpForm.style.opacity = '0';
    setTimeout(() => {
        signUpForm.style.display = 'none';
        loginForm.style.display = 'block';
        loginForm.style.opacity = '1';
    }, 300);
}

// Function to handle the sign-up process
function signUp(event) {
    event.preventDefault(); // Prevents page reload on form submission
    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;
    const message = document.getElementById('signup-message');

    if (username.length < 3 || password.length < 5) {
        message.innerText = 'Username must be at least 3 characters, password at least 5.';
        message.classList.add('error');
        return;
    }

    if (localStorage.getItem(username)) {
        message.innerText = 'Username already exists!';
        message.classList.add('error');
    } else {
        localStorage.setItem(username, password);
        message.innerText = 'User registered successfully!';
        message.classList.remove('error');
        message.classList.add('success');
        document.getElementById('new-username').value = '';
        document.getElementById('new-password').value = '';
        setTimeout(showLogin, 1500); // Delay to allow the user to see success message
    }
}

// Function to handle the login process
function login(event) {
    event.preventDefault(); // Prevents page reload on form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('login-message');

    const storedPassword = localStorage.getItem(username);
    if (storedPassword && storedPassword === password) {
        message.innerText = 'Login successful!';
        message.classList.remove('error');
        message.classList.add('success');
        setTimeout(() => {
            window.location.href = "dashboard.html"; // Redirect to dashboard after successful login
        }, 1500);
    } else {
        message.innerText = 'Invalid username or password!';
        message.classList.add('error');
    }
}
