
const error=document.querySelector('.error');
console.log(error)
const label2=document.querySelector('#label-2')
const label1=document.querySelector('#label-1')

document.querySelector('button').addEventListener('click', ()=> {
    const matricValue = document.querySelector('.matric').value;
    const passwordValue = document.querySelector('.password').value;
    console.log(`Matric No:${matricValue}`);
   
    const userDetails={
        matric:"",
        passwordbyuser:""
    }
    userDetails.matric = matricValue
    userDetails.passwordbyuser=passwordValue
    console.log(userDetails);  

    const matricPattern = /^(20(0[4-9]|[1-9][0-9])|20[2-9][0-9])\/([7-9][0-9]{3}|[1-9][0-9]{4})$/;
    
    if(!matricPattern.test(matricValue)){
        error.style.display = 'inline'; // Show error message
    }
    else {
         error.style.display="none"
        location.assign("dashboard.html")
    }
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
