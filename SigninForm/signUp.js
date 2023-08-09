const phno=document.querySelector('#phno');
const telError=document.querySelector('#tel-error');
const email=document.querySelector('#email');
const emailError=document.querySelector('#emailerror');
const firstname=document.querySelector('#fnam');
const firstnameError=document.querySelector('#fnamerror');
const lastname=document.querySelector('#lnam');
const lastnameError=document.querySelector('#lnamerror');
const pw=document.getElementById('pw');
const pwC=document.querySelector('#pwC');
const pwError=document.querySelector('#pwError');
const pwCError=document.querySelector('#pwCError');


firstname.addEventListener("input", function (event) {
  if (firstname.value === '') {
    firstnameError.textContent = 'Please type in your first name.';
  } else {
    firstnameError.textContent = '';
  }
}); 

lastname.addEventListener("input", function (event) {
  if (lastname.value === '') {
    lastnameError.textContent = 'Please type in your last name';
  } else {
    lastnameError.textContent = '';
  }
}); 
  phno.addEventListener("input", function (event) {
    if (phno.value.length<10 || phno.value.length>10) {
      telError.textContent = 'Please enter in a 10 digit phone number';
    } else {
      telError.textContent = '';
    }     
  }); 
  email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
      emailError.textContent = 'Please enter in a valid Email';
    } else {
      emailError.textContent = '';
    }
  }); 
pw.addEventListener("input",function(event){
  const currentValue = pw.value;
        const regExpCap = /[A-Z]/g;
        const regExpDig = /[0-9]/g;
        let result = '';
        if (regExpCap.test(currentValue)){
          result += '';
        } else {
          result += `Missing at least 1 capital letter. `;
          result += '\n';
        }
        
        
        if (regExpDig.test(currentValue)){
          result += '';
        } else {
          result += 'Missing at least 1 number. ';
          result += '\n';
        }
        
        if (currentValue.length < 9){
          result += 'Password must be at least 8 characters. '
          result += '\n';
        } else {
          result += '';
        }

        console.log(result);
        pwError.textContent = result;

  
       
});

  pwC.addEventListener("input", function (event) {
    if (pwC.value !== pw.value) {
      pwCError.textContent = 'Passwords do not match';
    } else {
      pwCError.textContent = '';
    }
  }); 