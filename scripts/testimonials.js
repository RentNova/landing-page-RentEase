const testimonials = [
    {
        name: "Cameron Williamson",
        title: "Arrendatario",
        image: "../img/testimonials/cameron.jpg",
        quote: "Funciona genial. Es la mejor experiencia de alquiler que he tenido, la recomiendo a todo el mundo."
    },
    {
        name: "John Doe",
        title: "Propietario",
        image: "../img/testimonials/john.jpg",
        quote: "Esta plataforma ha transformado la forma en que gestiono mis propiedades. Me gusta poder conseguir inquilinos seguros y mantener aseguradas mis propiedades con buenas personas ."
    },
    {
        name: "Jane Smith",
        title: "Propietaria",
        image: "../img/testimonials/jane.jpg",
        quote: "La plataforma es intuitiva y me ha ayudado a encontrar inquilinos confiables rápidamente. Definitivamente facilita el proceso de arrendamiento."
    },
    {
        name: "Michael Brown",
        title: "Arrendatario",
        image: "../img/testimonials/michael.jpg",
        quote: "Encontré la casa perfecta para mí gracias a esta plataforma. El proceso fue sencillo y directo, y me sentí seguro durante todo el proceso."
    },
    {
        name: "Emily Davis",
        title: "Propietaria",
        image: "../img/testimonials/emily.jpg",
        quote: "Publicar mis propiedades nunca ha sido tan fácil. La interfaz es amigable y he recibido muchas consultas de inquilinos potenciales de calidad."
    },
    {
        name: "Robert Wilson",
        title: "Arrendatario",
        image: "../img/testimonials/robert.jpg",
        quote: "Mudarse a una nueva ciudad puede ser abrumador, pero esta plataforma hizo que encontrar una nueva casa fuera un proceso sin estrés. La recomiendo encarecidamente."
    }
];

let currentTestimonialIndex = 0;

const nameElement = document.querySelector('.testimonial-profile .name');
const titleElement = document.querySelector('.testimonial-profile .title');
const imageElement = document.querySelector('.testimonial-profile img');
const quoteElement = document.querySelector('blockquote p');

document.getElementById('prev-testimonial').addEventListener('click', () => {
    currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) * testimonials.length % testimonials.length;
    updateTestimonial();
});

document.getElementById('next-testimonial').addEventListener('click', () => {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    updateTestimonial();
});

function updateTestimonial() {
    const testimonial = testimonials[currentTestimonialIndex];
    nameElement.textContent = testimonial.name;
    titleElement.textContent = testimonial.title;
    imageElement.src = testimonial.image;
    quoteElement.textContent = testimonial.quote;
}

// Inicializar con el primer testimonio
updateTestimonial();