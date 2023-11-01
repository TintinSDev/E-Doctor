const DOC_URL = 'http://localhost:3000'

async function fetchDocs() {

    const docResponse = await fetch(`${DOC_URL}/doctors`)
    const doctors = await docResponse.json()
    return fetch(`${DOC_URL}/doctors`)
}
// wrapper event handlers
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => { 
    wrapper.classList.remove('active-popup');
});