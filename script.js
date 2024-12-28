//Form validation

let form = document.getElementById('survey-form')

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let name = document.getElementById('name').value.trim()
    let email = document.getElementById('email').value.trim()
    let pno = document.getElementById('number').value.trim()

    let nameError=document.getElementById('nameError')
    nameError.innerHTML = "";
    let emailError=document.getElementById('emailError')
    emailError.innerHTML = "";
    let pnoError=document.getElementById('pnoError')
    pnoError.innerHTML = "";

    //Name validation
    if(name.length === 0){
        nameError.innerHTML = " ⚠️ Please enter your name";
    }
    else if (name.length<3){
        nameError.innerHTML = " ⚠️ Name should be at least 3 characters long";
    }

    //Email validation
    if (!email.includes('@')){
        emailError.innerHTML = " ⚠️ Please enter a valid email address";
    }

    //Phone number validation
    if (pno.length<10 || pno.length>10){
        pnoError.innerHTML = " ⚠️ Please enter a valid 10-digit phone number";
    }

    //Dropdown validation
    let dropdown = document.getElementById('dropdown').value
    let dropdownError = document.getElementById('dropdownError')
    dropdownError.innerHTML = "";
    
    if (dropdown===""){
        dropdownError.innerHTML = " ⚠️ Please select an option";
    }

    //Character limit of textarea
    let character = document.getElementById('bio').value
    let textareaError = document.getElementById('textareaError')
    textareaError.innerHTML = "";

    if (character.length>200){
        textareaError.innerHTML = " ⚠️ Maximum 200 characters allowed"
    }
})

//--------------------------------------------------------------------------------------------------

//Confirmation before reset

let reset = document.getElementById('reset')

reset.addEventListener('click',(event)=>{
    const confirmReset = confirm("Are you sure you want to reset?")
    if (!confirmReset){
        event.preventDefault()
    }
})

//--------------------------------------------------------------------------------------------------

//Dynamic Feedback Based on Selection
let satisfactionRadios = document.querySelectorAll('input[name="satisfaction"]');
satisfactionRadios.forEach((radio) => {
    radio.addEventListener('change', () => {
        let message = document.getElementById('feedbackMessage')
        message.innerHTML="";

        if (radio.id === 'unsatisfied') {
            message.innerHTML = '(We are sorry to hear that. Please let us know how we can improve.)';
        } else if (radio.id === 'satisfied') {
            message.innerHTML = '(Thank you! We are glad you are satisfied.)';
        }
        else{
            message.innerHTML = '(Please suggest us where we can improve.)';
        }
    });
});
















