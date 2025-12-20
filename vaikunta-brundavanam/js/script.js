/**
 * Vaikunta Brundavanam - Interactive Script
 * Handles mantra bar animation controls and user interactions
 */

// Initialize mantra bar interactivity
(function initMantraBar() {
    const mantraBar = document.getElementById('mantraBar');
    let isFast = false;

    /**
     * Toggle animation speed between normal and fast
     */
    function toggleSpeed() {
        isFast = !isFast;
        if (isFast) {
            mantraBar.classList.add('fast');
            mantraBar.classList.remove('paused');
        } else {
            mantraBar.classList.remove('fast');
            mantraBar.classList.remove('paused');
        }
    }

    /**
     * Desktop hover interaction - pause animation on hover
     */
    mantraBar.addEventListener('mouseenter', () => {
        mantraBar.classList.add('paused');
    });

    mantraBar.addEventListener('mouseleave', () => {
        mantraBar.classList.remove('paused');
    });

    /**
     * Mobile touch interaction - toggle speed on tap
     */
    mantraBar.addEventListener('touchstart', (e) => {
        toggleSpeed();
        
        // Provide haptic feedback via CSS transform
        mantraBar.style.transform = 'scale(0.98)';
        setTimeout(() => {
            mantraBar.style.transform = 'scale(1)';
        }, 100);
    }, { passive: true });
})();

/**
 * Add smooth scroll behavior for internal links (future enhancement)
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

/**
 * Enhanced accessibility: Announce external links to screen readers
 */
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    const ariaLabel = link.getAttribute('aria-label');
    if (!ariaLabel) {
        const text = link.textContent.trim();
        if (text) {
            link.setAttribute('aria-label', `${text} (opens in new window)`);
        }
    }
});
