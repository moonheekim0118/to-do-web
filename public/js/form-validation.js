/* sign up validation*/
const form_container = document.getElementById('form-container');
const email= document.getElementById('email');
const name = document.getElementById('name');
const password= document.getElementById('password');
const confirmPassowrd=document.getElementById('Conform-password');
const form_controls =document.querySelectorAll('.form-control');

function addError(input, message){
    const form_control= input.parentNode;
    const small= form_control.querySelector('small');
    small.innerText=message;
    form_control.classList.add('error');
}

function addPass(input){
    const form_control= input.parentNode;
    form_control.classList.remove('error');
    form_control.classList.add('sucess');
}

function requiredCheck(input){
    const inputLen= input.value.length;
        if(inputLen<=0){
            addError(input, `${input.id} is required`);
        }
        else{
            addPass(input);
        }
}

function lengthCheck(inputObj){
    const inputLen = inputObj.input.value.length;
    if(inputLen < inputObj.min){
        addError(inputObj.input, `${inputObj.input.id} must be at least ${inputObj.min}`);
    }
    else if(inputLen > inputObj.max){
        addError(inputObj.input, `${inputObj.input.id} must be less than ${inputObj.max}`);
    }
    else{
        addPass(inputObj.input);
    }
}

function matchingCheck(password1, password2){
    if(password1.value !== password2.value){
        addError(password2, 'Passwords do not match');
    }
    else{
        addPass(password2);
    }
}


email.addEventListener('keypress', ()=>{
    requiredCheck(email);
})

name.addEventListener('keypress', ()=>{
    requiredCheck(name);
    lengthCheck({input:name, min:2, max:10});
})

password.addEventListener('keypress', ()=>{
    requiredCheck(password);
    lengthCheck({input:password, min:6, max:12});
})

confirmPassowrd.addEventListener('keypress', ()=>{
    requiredCheck(confirmPassowrd);
    matchingCheck(password,confirmPassowrd);
})


form_container.addEventListener('submit', (e)=>{
    form_controls.forEach(input=>{
        if(input.classList.contains('error')){
            e.preventDefault();
        }
    });
});
