// for header

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
navbar.classList.toggle('active');
menu.classList.toggle('fa-times');    
}

//for window scroll

window.onscroll = () => {
navbar.classList.remove('active');
menu.classList.remove('fa-times');

if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
}else{
    document.querySelector('.header').classList.remove('active');
}

window.onload = () => {
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}
}

//for home section

var swiper = new Swiper(".home-slider", {
spaceBetween: 20,
effect: "fade",
grabCursor: true,
loop: true,
centeredSlides: true,
autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },
});

//for feature section

var swiper = new Swiper(".feature-slider", {
spaceBetween: 20,
grabCursor: true,
loop: true,
centeredSlides: true,
autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },

  breakpoints:{
    0:{
        slidesPerView: 1,
    },        
    768:{
        slidesPerView: 2,
    },
    991:{
        slidesPerView: 3,
    },
  },
});

//for blogs section

var swiper = new Swiper(".blogs-slider", {
spaceBetween: 20,
grabCursor: true,
loop: true,
centeredSlides: true,
autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },

  breakpoints:{
    0:{
        slidesPerView: 1,
    },        
    768:{
        slidesPerView: 2,
    },
    991:{
        slidesPerView: 3,
    },
  },
});


//   //for professional section

//   var swiper = new Swiper(".professional-slider", {
//     spaceBetween: 20,
//     grabCursor: true,
//     loop: true,
//     centeredSlides: true,
//     autoplay: {
//         delay: 9500,
//         disableOnInteraction: false,
//       },

//       breakpoints:{
//         0:{
//             slidesPerView: 1,
//         },        
//         768:{
//             slidesPerView: 2,
//         },
//         991:{
//             slidesPerView: 3,
//         },
//       },
//   });

// // //func para mostarr detalle de los masajes al hacer click en Leer Mas
// // function mostrarServicio(titulo, descripcion) {
// //     document.getElementById('descripcion-masaje').innerText = descripcion;
// // }

// //func para manejar el envio del formulario
// function enviarFormulario(event) {
//     event.preventDefault();

//     //obtengo los valores del form
//     var nombre= document.getElementById('nombre').value;
//     var correo= document.getElementById('correo').value;
//     var telefono= document.getElementById('telefono').value;

//     document.getElementById('mensaje-confirmacion').innerText = `Gracias, ${nombre}! Tu inscripción ha sido recibida. Te contactaremos a tu correo (${correo}) o teléfono (${telefono}).`;

//     document.getElementById('formulario-inscripcion').reset();
// }

//enviar form-inscripcion por whatsApp

function enviarWhatsApp() {
// Obtener los valores del formulario
var nombre = document.getElementById('nombre').value;
var habitacion = document.getElementById('habitacion').value;
var correo = document.getElementById('correo').value;
var telefono = document.getElementById('telefono').value;

// Crear el mensaje que se enviará por WhatsApp
// var mensaje = `Nombre: ${nombre}\nMasaje: ${masaje}\nCorreo: ${correo}\nTeléfono: ${telefono}`;

if(!nombre || !habitacion || !correo || !telefono) {
    alert('Por favor , completa todos los campos del formulario.');
    return;
}

var mensaje = `¡Hola! Mi nombre es ${nombre} y estoy interesad@ en reservar la habitacion ${habitacion}. 
Mi correo es ${correo} y mi número de teléfono es ${telefono}. 
¿Podrías brindarme más información? ¡Gracias!`;

// Crear el enlace de WhatsApp
var numeroWhatsApp = '554188833923';  // Número de WhatsApp donde se enviará el mensaje
var enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

// Redirigir al enlace de WhatsApp
window.open(enlaceWhatsApp, '_blank');
}