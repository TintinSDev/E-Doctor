const DOC_URL = 'https://my-json-server.typicode.com/TintinSDev/E-Doctor'

async function fetchDocs() {
    const docResponse = await fetch(`${DOC_URL}/doctors`)
    const doctors = await docResponse.json()
    return doctors; // Return the parsed data instead of making another fetch call
}
function sum() {
    appointments.textContent = Math.floor(appointments.textContent) + 1
    document.querySelector('#appointments').value = appointments.textContent
    appointments.onclick = sum;
}

function handleSubmit() { 
    let feedback = document.querySelector('.feed-section');
    console.log(feedback);
}

// like button function
function showConfetti() {
    confetti(
        {
            particleCount: 150,
            spread: 60
        }
    );
}

document.addEventListener('DOMContentLoaded', () => {

    const docName = document.querySelector('#doc-name')
    const docImage = document.querySelector('#doc-image')
    const speciality = document.querySelector('#specs')
    const genders = document.querySelector('#gender')
    const appointments = document.querySelector('#appointments')
    const specialistList = document.querySelector('#spec-list')

    // display doctors details for booking appointments
    fetch(`${DOC_URL}/doctors`)
        .then(response => response.json())
        .then(doctors => {
            docName.innerText = doctors[0].name;
            docImage.src = doctors[0].image_url
            speciality.innerText = doctors[0].speciality
            genders.innerText = doctors[0].gender
            appointments.textContent = doctors[0].appointments
            specialistList.innerHTML = ''
            for (let doc of doctors) {
                specialistList.innerHTML += `<li>${doc.speciality}</li>`
            }
        })
     
    //specialistList click event    
        specialistList.addEventListener('click', (e) => {
            e.preventDefault()
            fetch(`${DOC_URL}/doctors`)
                .then(response => response.json())
                .then(doctors => {
                    for (let doc of doctors) {
                        if (doc.speciality === e.target.innerText) {
                            docName.innerText = doc.name;
                            docImage.src = doc.image_url
                            speciality.innerText = doc.speciality
                            appointments.textContent= doc.appointments
                            genders.innerText = doc.gender
                        }
                    }
                })
        })
     const fetchList = document.querySelector('.btn')
     fetchList.addEventListener('click', (e) => {
         e.preventDefault();
         fetch(`${DOC_URL}/doctors/${appointments.textContent}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            } 
              
        })
            .then(response => response.json())
            .then(doctors => {
                console.log(doctors)
            })
                 sum();
     })
    
    // submit event
    const feedback = document.querySelector('.feedback-btn')
    feedback.addEventListener('submit', submit => {
        submit.preventDefault();
        handleSubmit();
    });


    //wrapper event handlers
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const btnPopup = document.querySelector('.btnLogin-popup');
    const iconClose = document.querySelector('.icon-close');
    const wrapperForm = document.querySelector('.wrapper-form');
    const addFeedback = document.querySelector('.add-feedback');



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
    fetchDocs();

})























