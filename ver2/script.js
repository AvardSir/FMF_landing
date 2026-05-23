document.addEventListener('DOMContentLoaded', () => {
    const featureCards = document.querySelectorAll('.feature-card');
    const showcaseImages = document.querySelectorAll('.showcase-image img');
    const statCards = document.querySelectorAll('.stat-card img');

    featureCards.forEach(card => {
        const img = card.querySelector('img');
        const originalSrc = img.src;
        const animationSrc = card.dataset.animation;

        if (animationSrc) {
            card.addEventListener('mouseenter', () => {
                img.src = animationSrc;
            });

            card.addEventListener('mouseleave', () => {
                img.src = originalSrc;
            });
        }
    });

    showcaseImages.forEach(img => {
        const originalSrc = img.src;
        const animationSrc = img.dataset.animation;

        if (animationSrc) {
            img.addEventListener('mouseenter', () => {
                img.src = animationSrc;
            });

            img.addEventListener('mouseleave', () => {
                img.src = originalSrc;
            });
        }
    });

    statCards.forEach(img => {
        const card = img.closest('.stat-card');
        const originalSrc = img.src;
        const animationSrc = img.dataset.animation;

        if (animationSrc) {
            card.addEventListener('mouseenter', () => {
                img.src = animationSrc;
            });

            card.addEventListener('mouseleave', () => {
                img.src = originalSrc;
            });
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card, .showcase-item, .stat-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
        form.reset();
    });
});
