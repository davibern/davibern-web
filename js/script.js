document.addEventListener('DOMContentLoaded', () => {
    // Cursor glow follow
    const cursorGlow = document.querySelector('.cursor-glow');
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });

    // Reveal on scroll
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        reveals.forEach(el => {
            const revealTop = el.getBoundingClientRect().top;
            const revealPoint = 150;
            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // Smooth reveal for hero text
    setTimeout(() => {
        document.querySelector('.hero-section h1').style.opacity = '1';
        document.querySelector('.hero-section h1').style.transform = 'translateY(0)';
    }, 300);

    // Profile Image Tilt Effect
    const profileContainer = document.querySelector('.profile-container');
    const profileImg = document.querySelector('.profile-img');

    if (profileContainer && profileImg) {
        profileContainer.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = profileContainer.getBoundingClientRect();
            const x = (e.clientX - left) / width;
            const y = (e.clientY - top) / height;

            const rotateX = (y - 0.5) * 20; // Max 10 degrees tilt
            const rotateY = (x - 0.5) * -20; // Max 10 degrees tilt

            profileImg.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });

        profileContainer.addEventListener('mouseleave', () => {
            profileImg.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
        });
    }
});
