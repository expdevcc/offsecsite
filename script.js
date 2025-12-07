// ===================================
// 1. Particles.js Arka Plan Animasyonu
// ===================================

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#00ff00" // Yeşil Neon
        },
        "shape": {
            "type": "circle",
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
            }
        },
        "size": {
            "value": 3,
            "random": true,
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#00ff00",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "repulse": {
                "distance": 100,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            }
        }
    },
    "retina_detect": true
});


// ===================================
// 2. Terminal Tipi Yazma Efekti
// ===================================

const typingTextElement = document.querySelector('.typing-text');
const originalText = typingTextElement.getAttribute('data-text');
let charIndex = 0;
const typingSpeed = 100;

function type() {
    const currentText = originalText.substring(0, charIndex);
    typingTextElement.textContent = currentText;

    if (charIndex < originalText.length) {
        charIndex++;
        setTimeout(type, typingSpeed);
    } 
    // Yazma bittiğinde, imlecin yanıp sönmesi CSS'teki border ile sağlanmıştır.
}

document.addEventListener('DOMContentLoaded', () => {
    // Sadece bir kez yazıp dursun diye ayarlandı.
    setTimeout(type, 500); 
    initializeScrollReveal(); // Sayfa yüklendiğinde reveal animasyonlarını başlat
});


// ===================================
// 3. Bölüm Göründüğünde Reveal Animasyonu
// ===================================

function initializeScrollReveal() {
    const sectionsToReveal = document.querySelectorAll('.reveal-section');

    // Intersection Observer ayarları
    const observerOptions = {
        root: null, // viewport'u kök olarak kullan
        rootMargin: '0px',
        threshold: 0.1 // %10'u görünür olduğunda tetikle
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Bölüm görünür hale geldi
                entry.target.classList.add('is-visible');
                // Animasyon sadece bir kez çalışacağı için izlemeyi durdur
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Tüm .reveal-section elementlerini izlemeye başla
    sectionsToReveal.forEach(section => {
        observer.observe(section);
    });
}

// NOT: Smooth Scroll (Yumuşak Kaydırma) için JavaScript kodu gerekmez.
// CSS'teki 'scroll-behavior: smooth;' özelliği, tüm dahili navigasyon (navbar linkleri) 
// tıklamaları için bu işlevi otomatik olarak yerine getirir.
