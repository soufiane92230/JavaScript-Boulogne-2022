
// ---- function to check data validity ---- //

// get input id and value as parameters
const check_data = (value, id) => {

    let error_msg = '';

    // create error messages
    if (id == 'pseudo') {
        error_msg = (value.length < 3 || value.length > 10) ? 'doit contenir entre 3 et 10 caractères' : '';
    }
    if (id == 'email') {
        error_msg = (value.match(/^[\.\w_-]+@[a-z]+\.[a-z]{2,3}$/i) == null) ? 'format non valide' : '';
    }
    if (id == 'password') {
        // 8 caractères : 1 majuscule et 1 caractère spécial
        let regex = /(?=.*?[A-Z])(?=(.*[\W]){1,})(?!.*\s).{8,}$/g;

        if (value.match(regex) == null) {
            error_msg = 'doit contenir une majuscule \n et un caractère spécial';
            progress_bar.style.background = 'firebrick';
            progress_bar.style.width = '33%';
        }
        else {
            if (value.length < 12) {
                progress_bar.style.background = 'orange';
                progress_bar.style.width = '66%';
            }
            else {
                progress_bar.style.background = 'rgb(31, 136, 31)';
                progress_bar.style.width = '100%';
            }
        }

        // if password has been changed and not confirmed 
        if (password2.value !== '' && value !== password2.value) {
            document.querySelector(`[data-input="password2"`).innerHTML = `<i class="fas fa-exclamation-triangle"></i> mots de passe différents `;
            document.getElementById('password2').classList.add('invalid');
            document.getElementById('password2').classList.remove('valid')
        }
    }

    if (id == 'password2') {
        error_msg = (value !== password.value) ? 'mots de passe différents' : '';
    }


    // display icon + error message + red border  
    if (error_msg) {
        document.querySelector(`[data-input=${id}`).innerHTML = `<i class="fas fa-exclamation-triangle"></i> ${error_msg}`;
        document.getElementById(id).classList.add('invalid');
        document.getElementById(id).classList.remove('valid')
    }
    // display green border
    else {
        document.querySelector(`[data-input=${id}`).innerHTML = '';
        document.getElementById(id).classList.add('valid')
    }
}


// ---- call function check_data() on all inputs while something is tapped in  --- //

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
    input.addEventListener('input', (e) => {
        check_data(e.target.value, e.target.id);
        document.getElementById(e.target.id).classList.add('invalid');
    })
}

// ---- form submission ---- //

submit.addEventListener('click', (e) => {
    e.preventDefault();
    // if all data are valid and no missing one
    if ([...inputs].every(input => [...input.classList].includes('valid')) || [...inputs].every(input => input.value !== '')) {

        // success pop up
        Swal.fire({
            icon: 'success',
            title: 'Inscription Done',
            showConfirmButton: false,
            // timer: 2000
        })
        document.querySelector('h2#swal2-title').style.color = '#e15cb3';

        // clear each input and remove style
        [...inputs].map(input => {
            input.value = '';
            input.classList.remove('valid', 'invalid');
            progress_bar.style.width = 0;
        })
    }

    // error pop up
    else {
        Swal.fire({
            icon: 'error',
            title: 'Missing or Invalid Input',
        });
        for (const input of inputs) {
            input.classList.add('invalid');
        }
    }
})



