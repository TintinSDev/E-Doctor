const DOC_URL = 'http://localhost:3000'

async function fetchDocs() {

    const docResponse = await fetch(`${DOC_URL}/doctors`)
    const doctors = await docResponse.json()
    return fetch(`${DOC_URL}/doctors`)
}
function services() {

}

document.addEventListener('DOMContentLoaded', () => {
    const docName = document.getElementById('doc-name')
    const docImage = document.getElementById('doc-image')
    const speciality = document.getElementById('specs')
    const genders = document.getElementById('gender')
    const appointment = document.getElementById('app-btn')


    fetch(`${DOC_URL}/doctors`)
        .then(response => response.json())
        .then(doctors => {
            docName.innerText = doctors.name;
            docImage.src = doctors.image_url
            speciality.innerText = doctors.speciality
            genders.innerText = doctors.gender
        })

    const details = document.querySelector('.details');
    details.addEventListener('click', (e) => {
        e.preventDefault()
        fetch(`${DOC_URL}/doctors`)
            .then(response => response.json())
            .then(doctors => {
                for (let doc of doctors) {
                    if (doc.name === e.target.textContent) {
                        docName.innerText = doc.name;
                        docImage.src = doc.image_url
                        speciality.innerText = doc.speciality
                        genders.innerText = doc.gender
                    }
                }
            })
    })
























    //wrapper event handlers
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

    // btnPopup.addEventListener('click', () => {
    // wrapper.classList.add('active-popup');
    // });

    iconClose.addEventListener('click', () => {
        wrapper.classList.remove('active-popup');
    });


})























