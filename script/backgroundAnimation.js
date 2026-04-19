// Background Animation - Partikel Emas
document.addEventListener('DOMContentLoaded', function() {
    createGoldParticles();
});

function createGoldParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.style.position = 'fixed';
    particleContainer.style.top = '0';
    particleContainer.style.left = '0';
    particleContainer.style.width = '100%';
    particleContainer.style.height = '100%';
    particleContainer.style.pointerEvents = 'none';
    particleContainer.style.zIndex = '0';
    particleContainer.style.overflow = 'hidden';
    
    document.body.insertBefore(particleContainer, document.body.firstChild);
    
    // Buat 30 partikel emas
    for (let i = 0; i < 30; i++) {
        createParticle(particleContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    
    // Style partikel emas
    particle.style.position = 'absolute';
    particle.style.width = Math.random() * 6 + 2 + 'px';
    particle.style.height = particle.style.width;
    particle.style.background = `radial-gradient(circle, #FFD700, #FFA500)`;
    particle.style.borderRadius = '50%';
    particle.style.boxShadow = '0 0 20px #FFD700';
    particle.style.opacity = Math.random() * 0.3 + 0.1;
    
    // Posisi acak
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    
    // Animasi
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    
    particle.style.animation = `floatParticle ${duration}s ease-in-out ${delay}s infinite`;
    
    container.appendChild(particle);
}

// Tambahkan keyframe untuk partikel
const style = document.createElement('style');
style.textContent = `
    @keyframes floatParticle {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.1;
        }
        25% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(1.5);
            opacity: 0.3;
        }
        50% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(1);
            opacity: 0.1;
        }
        75% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(1.5);
            opacity: 0.3;
        }
        100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.1;
        }
    }
`;
document.head.appendChild(style);