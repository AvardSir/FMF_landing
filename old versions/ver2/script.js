document.addEventListener('DOMContentLoaded', () => {
    const screenImages = document.querySelectorAll('.screen-image');

    screenImages.forEach(img => {
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
});
