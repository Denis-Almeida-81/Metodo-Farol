 // Reveal on scroll
        const reveals = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((e, i) => {
                if (e.isIntersecting) {
                    setTimeout(() => e.target.classList.add('visible'), i * 60);
                    observer.unobserve(e.target);
                }
            });
        }, { threshold: 0.12 });
        reveals.forEach(el => observer.observe(el));

        // Sticky CTA
        const sticky = document.getElementById('stickyCta');
        const hero = document.querySelector('.hero');
        window.addEventListener('scroll', () => {
            const heroBottom = hero.getBoundingClientRect().bottom;
            sticky.classList.toggle('show', heroBottom < 0);
        });

        