

const email=document.querySelector('.email');
const error=document.querySelector('.error');
const inputField=document.querySelector('#input-field-2')
const label2=document.querySelector('#label-2')
const label1=document.querySelector('#label-1')

document.querySelector('button').addEventListener('click', function () {
    const matricValue = document.querySelector('.matric').value;
    const emailValue = document.querySelector('.email').value;
    const passwordValue = document.querySelector('.password').value;
    console.log(`Matric No:${matricValue}`);
   
    const userDetails={
        email:"",
        passwordbyuser:""
    }
    userDetails.email = emailValue
    userDetails.passwordbyuser=passwordValue
    console.log(userDetails);  

    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const matricPattern = /^(20(0[4-9]|[1-9][0-9])|20[2-9][0-9])\/([7-9][0-9]{3}|[1-9][0-9]{4})$/;
    
    if(!matricPattern.test(matricValue)){
        error.style.display = 'inline'; // Show error message
        label1.style.color='red' 
    }
    else {
         error.style.display="none"
        inputField.style.border="2px solid D3D2D2"
        label1.style.color='black'
    }
    if (!emailPattern.test(email.value)) {
        error.style.display = 'inline'; // Show error message
        label2.style.color='red'
    } 
    else {
        error.style.display = 'none'; 
        // Hide error message
        inputField.style.border="2px solid D3D2D2"
        label2.style.color='black'
        location.assign('main.html')
    }
    inputField.style.border="2px solid D3D2D2"
});
document.addEventListener('DOMContentLoaded', ()=>{
    const swiper = new Swiper(".swiper", {

        effect: "fade",
        
        autoplay: {
          delay:3000,
          disableOnInteraction: false,
        },
        loop: true,
        speed: 600,
      });
    swiper.slideNext()
})
