
// const password1 = document.form.password1;
// const password2 = document.form.password2;

// const submitBtn = document.querySelector('#submit');

// submitBtn.addEventListener('click', function (e){
//     e.preventDefault();

//     if (password1.value !==password2.value){
//         alert('password does not match')
//         return false;
//     } else{
//         alert('form submitted')
//     }

// })
const inputValue = document.form.numInput;
const submitBtn = document.querySelector('#subBtn');

    submitBtn.addEventListener('click', (e)=> {
        e.preventDefault();

        if( isNaN(inputValue.value)){
            alert("Must input numbers");
    return false;
        }

    });


    const inputValue = document.form.char-length;
const submitBtn = document.querySelector('#subBtn');

    submitBtn.addEventListener('click', (e)=> {
        e.preventDefault();

        if( inputValue.value === ){
            alert("input character must be up to 6");
    return false;
        }

    })


