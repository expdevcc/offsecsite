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
let isDeleting = false;
const typingSpeed = 100; // Yazma hızı (ms)
const deletingSpeed = 50; // Silme hızı (ms)
const pauseTime = 2000; // Cümle bittikten sonra bekleme süresi (ms)

function type() {
    const currentText = originalText.substring(0, charIndex);
    typingTextElement.textContent = currentText;

    if (!isDeleting && charIndex < originalText.length) {
        // Yazma
        charIndex++;
        setTimeout(type, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
        // Silme (Bu örnekte sadece bir kez yazıp durmasını istiyorsanız bu kısmı silebilirsiniz)
        charIndex--;
        setTimeout(type, deletingSpeed);
    } else if (!isDeleting && charIndex === originalText.length) {
        // Yazma bitti, durakla
        // isDeleting = true; // Tekrar silmek ve döngüye girmek için bu satırı etkinleştirin
        // setTimeout(type, pauseTime);
    } else if (isDeleting && charIndex === 0) {
        // Silme bitti, tekrar başla
        isDeleting = false;
        setTimeout(type, 500);
    }
}

// Efekti başlat
document.addEventListener('DOMContentLoaded', () => {
    // Sadece bir kez yazıp dursun diye ayarladım.
    setTimeout(type, 500); 
});