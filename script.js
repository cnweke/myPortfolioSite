//toggle icon nav bar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
  











//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
    
        if(top >=offset && top < offset+ height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');


            });
        };
        
    });

    // sticky navbar
    let header = document.querySelector('header');
     
    header.classList.toggle('sticky', window.scrollY > 100);
   
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');




};

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading',{origin:  'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',{origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-img', {origin: 'right'});


//I am
const typed = new Typed('.multiple-text', {
strings: ['Mobile Developer', 'Software Developer', 'Cloud Engineer','Technical writer'],
typespeed: 100,
backspeed: 100,
backDelay: 1000,
loop: true

});

//Send Fuction for Email
function SendEmail(){

    // let name = document.getElementById("name").value;
    // let Email = document.getElementById("Email").value;
    // let Subject = document.getElementById("Subject").value;
    // let Bodi = document.getElementById("message").value;
    // let MobNumber= document.getElementById("Mob_Num").value;


   try{
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "emekasdeveloperemail@gmail.com",
        Password : "49C1E44385293B30DCAEE136D49F8EC8BDAE",
        To : "emekasdeveloperemail@gmail.com",
        From : "emekasdeveloperemail@gmail.com",
        Subject : document.getElementById("Subject").value,
        Body : "Name: "+ document.getElementById("name").value + "<br/> Email: "+document.getElementById("Email").value +"<br/> Mobile  Number: "+ document.getElementById("Mob_Num").value+ "<br/> Body: "+document.getElementById("message").value
        // Body: "Headie one"
    }).then(
      message => alert("Contact Initiated! :D")
    );
   }
   catch(error){
       alert("Contact page not working right now please try my socials :)");
   }


// Email.send({
//     Host : "smtp.gmail.com",
//     Username : "emekasdeveloperemail@gmail.com",
//     Password : "49C1E44385293B30DCAEE136D49F8EC8BDAE",
//     To : "emekasdeveloperemail@gmail.com",
//     From : "emekasdeveloperemail@gmail.com",
//     Subject : "This is the subject",
//     Body : "And this is the body"
// }).then(
//   message => alert("sent")
// );
}