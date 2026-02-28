document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       SCROLL ANIMATIONS (Intersection Observer)
       ========================================= */

    /* =========================================
       NAVBAR SCROLL EFFECT
       ========================================= */
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* =========================================
       SPLINE 3D INTEGRATION LOGIC
       ========================================= */
    const splineBg = document.getElementById('spline-bg');
    const splineFallback = document.getElementById('spline-fallback');
    const splineViewer = document.getElementById('spline-viewer');

    // --- Detect successful load ---
    // spline-viewer fires a 'load' event when the scene is ready
    if (splineViewer) {
        splineViewer.addEventListener('load', () => {
            // Fade in Spline
            splineBg.classList.add('loaded');

            // Fade out Fallback
            splineFallback.style.opacity = '0';
            setTimeout(() => {
                splineFallback.style.display = 'none';
            }, 800); // Wait for transition to finish

            console.log('Spline 3D scene loaded successfully.');
        });
    }

});
