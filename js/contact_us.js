const scriptURL = 'https://docs.google.com/forms/d/e/1FAIpQLScdKw6S25dMAbPHHenRJ_vzxUpYyZL7kxqvL7fXUoAFi4mwoA/viewform?usp=embed_googleplus';
const form = document.forms['submit-to-google-sheet']
const loading = document.querySelector('.js-loading')

form.addEventListener('submit', e => {
    e.preventDefault()
    //showLoadingIndicator()
    fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: new FormData(form) })
        .then(response => showSuccessMessage(response))
        .catch(error => showErrorMessage(error))
})

function showLoadingIndicator() {
    form.classList.add('is-hidden')
    loading.classList.remove('is-hidden')
}

function showSuccessMessage(response) {
    //loading.classList.add('is-hidden');
    alert('Form submitted successfully!');
    //form.classList.remove('is-hidden');
    form.reset();
}

function showErrorMessage(error) {
    //loading.classList.add('is-hidden');
    alert('Error!', error.message);
    //form.classList.remove('is-hidden');
}

