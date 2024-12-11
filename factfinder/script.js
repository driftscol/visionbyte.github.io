const signUpBtn = document.querySelector('.buttons .sign-up');
const logInBtn = document.querySelector('.buttons .log-in');
const signUpForm = document.querySelector('.form-container.sign-up');
const logInForm = document.querySelector('.form-container.log-in');
const backBtns = document.querySelectorAll('.back-btn');
const submitSignUpBtn = document.querySelector('.form-container.sign-up .btn.sign-up');

signUpBtn.addEventListener('click', () => {
    signUpForm.classList.add('active');
    logInForm.classList.remove('active');
});

logInBtn.addEventListener('click', () => {
    signUpForm.classList.remove('active');
    logInForm.classList.add('active');
});

backBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        signUpForm.classList.remove('active');
        logInForm.classList.remove('active');
    });
});

// Redirect to the welcome page after clicking "Sign Up"
submitSignUpBtn.addEventListener('click', (event) => {
    event.preventDefault();  // Prevent form submission
    window.location.href = "welcome.html";  // Redirect to welcome page
});
