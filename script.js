// Código Java a escribir
const javaCode = `public class Developer {
    public static void main(String[] args) {
        System.out.println("Mario López Duro");
        System.out.println("DAM Student");
    }
}`;

// Efecto de escritura de código
let index = 0;
const typedCodeElement = document.getElementById('typedCode');
const codeContainer = document.getElementById('codeContainer');
const heroContent = document.getElementById('heroContent');

function typeCode() {
    if (index < javaCode.length) {
        typedCodeElement.textContent += javaCode.charAt(index);
        index++;
        setTimeout(typeCode, 50); // Velocidad de escritura (50ms por carácter)
    } else {
        // Cuando termine de escribir, esperar 1 segundo y mostrar el contenido
        setTimeout(() => {
            codeContainer.style.display = 'none';
            heroContent.classList.add('show');
        }, 1000);
    }
}

// Iniciar la animación cuando cargue la página
window.addEventListener('load', () => {
    typeCode();
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ============================
// ANIMACIONES AL HACER SCROLL
// ============================

const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {

    card.classList.add('hidden');

    observer.observe(card);

});


// ============================
// BOTÓN VOLVER ARRIBA
// ============================

const btnTop = document.createElement('button');

btnTop.innerHTML = '↑';

btnTop.id = 'btnTop';

document.body.appendChild(btnTop);


window.addEventListener('scroll', () => {

    if (window.scrollY > 300) {

        btnTop.style.display = 'block';

    } else {

        btnTop.style.display = 'none';

    }

});


btnTop.addEventListener('click', () => {

    window.scrollTo({

        top: 0,
        behavior: 'smooth'

    });

});


// ============================
// AÑO AUTOMÁTICO FOOTER
// ============================

document.querySelector(
    "footer p"
).innerHTML =
`© ${new Date().getFullYear()} Mario López Duro`;