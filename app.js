// Validate Input

var firstName =document.querySelector('#fname')
var lastName =document.querySelector('#lname')
var contactNumber =document.querySelector('#cnumber')
var company =document.querySelector('#company')
var email =document.querySelector('#email')
var form =document.querySelector('form')

function showError(input,message){
    let parent = input.parentElement;
    let small = parent.querySelector('small');

    parent.classList.add('error');
    small.innerText= message;
}

function showSuccess(input){
    let parent=input.parentElement;
    let small=parent.querySelector('small');

    parent.classList.remove('error');
    small.innerText='';
}

function checkEmptyError(listInput){
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim()

        if(!input.value){
            isEmptyError=true;
            showError(input,"Không được để trống !")
        }else{
            showSuccess(input)
        }
    });

    return isEmptyError
}

function checkEmailError(input){
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    input.value = input.value.trim()

    let isEmailError = !regexEmail.test(input.value)
    if(regexEmail.test(input.value)){
        showSuccess()
    }else{
        showError(input,'Email không đúng định dạng !')
    }

    return isEmailError
}

function checkLengthError(input,min,max){
    input.value =input.value.trim()

    if(input.value.length < min){
        showError(input,`Phải có ít nhất ${min} ký tự !`)
        return true
    }

    if(input.value.length >max){
        showError(input,`Không được quá ${max} ký tự !`)
        return true
    }

    return false
}

form.addEventListener('submit',function(e){
    e.preventDefault()

    let isEmptyError = checkEmptyError([firstName,lastName,email,contactNumber,company])

    let isEmailError = checkEmailError(email)

    let isFNameLengthError = checkLengthError(firstName,3,10)
    let isLNameLengthError = checkLengthError(lastName,3,10)
})


// backToTop
var mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}