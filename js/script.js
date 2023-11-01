const DOC_URL = 'http://localhost:3000'

async function fetchDocs() {

    const docResponse = await fetch(`${DOC_URL}/doctors`)
    const doctors = await docResponse.json()
    return fetch(`${DOC_URL}/doctors`)
}
function add() {
    appointments.textContent = appointments.textContent + 1
    document.querySelector('#appointments').innerHTML = appointments.textContent;
    appointments.onclick = add;
}

document.addEventListener('DOMContentLoaded', () => {
    const docName = document.getElementById('doc-name')
    const docImage = document.getElementById('doc-image')
    const speciality = document.getElementById('specs')
    const genders = document.getElementById('gender')
    const appointments = document.getElementById('appointments')
    const appointment = document.getElementById('app-btn')
    
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
                            genders.innerText = doc.gender
                        }
                    }
                })
        })
     const fetchList = document.querySelector('.btn')
     fetchList.addEventListener('click', (e) => {
         e.preventDefault()
          console.log(e.target)
         fetch(`${DOC_URL}/doctors`)
             
                 .then(response => response.json())
                 .then(doctors => {
                     console.log(doctors)
                 })
                 add();
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

    btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    });

    iconClose.addEventListener('click', () => {
        wrapper.classList.remove('active-popup');
    });
    fetchDocs();

})























