     /* ============================================================================
           DEVOTIONAL AUDIO CONTROL
           Handles audio playback, muting, volume fading, and browser autoplay policies
           ============================================================================ */

        const audio = document.getElementById('devotionalAudio');
        const audioBtn = document.getElementById('audioControlBtn');
        const INITIAL_VOLUME = 0.35; // 35% volume - peaceful level
        const FADE_DURATION = 2000; // 2 second fade in/out

        let isPlaying = false;
        let isMuted = false;
        let fadeTimeout = null;

        /**
         * Fade audio volume smoothly from one level to another
         * @param {number} targetVolume - Target volume (0-1)
         * @param {number} duration - Duration in milliseconds
         */
        function fadeAudio(targetVolume, duration = FADE_DURATION) {
            if (fadeTimeout) clearTimeout(fadeTimeout);
            
            const startVolume = audio.volume;
            const startTime = Date.now();
            
            function update() {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                audio.volume = startVolume + (targetVolume - startVolume) * progress;
                
                if (progress < 1) {
                    fadeTimeout = requestAnimationFrame(update);
                }
            }
            
            fadeTimeout = requestAnimationFrame(update);
        }

        /**
         * Start audio playback with fade-in effect
         */
        function playAudio() {
            audio.volume = 0;
            const playPromise = audio.play();
            
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        isPlaying = true;
                        isMuted = false;
                        updateButtonState();
                        fadeAudio(INITIAL_VOLUME, FADE_DURATION);
                    })
                    .catch((error) => {
                        console.log('Autoplay prevented - user interaction required:', error.name);
                        // User interaction required - button click will trigger playback
                    });
            }
        }

        /**
         * Stop audio playback with fade-out effect
         */
        function stopAudio() {
            fadeAudio(0, 1000);
            setTimeout(() => {
                audio.pause();
                audio.currentTime = 0;
                isPlaying = false;
                isMuted = true;
                updateButtonState();
            }, 1000);
        }

        /**
         * Toggle audio playback state
         */
        function toggleAudio() {
            if (isPlaying && !isMuted) {
                stopAudio();
            } else {
                playAudio();
            }
        }

        /**
         * Update button UI based on playback state
         */
        function updateButtonState() {
            if (isPlaying && !isMuted) {
                audioBtn.classList.remove('muted');
                audioBtn.classList.add('playing');
                audioBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
                audioBtn.title = 'Mute devotional music';
            } else {
                audioBtn.classList.remove('playing');
                audioBtn.classList.add('muted');
                audioBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
                audioBtn.title = 'Play devotional music';
            }
        }

        // Initialize audio settings
        audio.volume = 0;
        audio.loop = true;

        // Audio button click handler
        audioBtn.addEventListener('click', toggleAudio);

        // Keyboard shortcut: Space to toggle (when button focused)
        audioBtn.addEventListener('keydown', (e) => {
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                toggleAudio();
            }
        });

        // Start audio on page load (with fallback for autoplay restrictions)
        window.addEventListener('load', () => {
            setTimeout(playAudio, 500);
        });

        // Fallback: Play on first user interaction if autoplay is blocked
        function playOnUserInteraction() {
            if (!isPlaying) {
                playAudio();
            }
            document.removeEventListener('click', playOnUserInteraction);
            document.removeEventListener('touchstart', playOnUserInteraction);
        }

        document.addEventListener('click', playOnUserInteraction, { once: true });
        document.addEventListener('touchstart', playOnUserInteraction, { once: true });

        // Update button state on audio ended (in case of issues)
        audio.addEventListener('ended', () => {
            if (audio.loop) {
                audio.play();
            }
        });

        // Initialize button state
        updateButtonState();

        /* ============================================================================
           MANTRA BAR ANIMATION
           ============================================================================ */

        const mantraBar = document.getElementById('mantraBar');
        let isFast = false;
        
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
        
        // Handle Hover (Desktop)
        mantraBar.addEventListener('mouseenter', () => {
            mantraBar.classList.add('paused');
        });
        
        mantraBar.addEventListener('mouseleave', () => {
            mantraBar.classList.remove('paused');
        });

        // Handle Touch (Mobile)
        mantraBar.addEventListener('touchstart', (e) => {
            toggleSpeed();
            
            // Visual feedback
            mantraBar.style.transform = 'scale(0.98)';
            setTimeout(() => {
                mantraBar.style.transform = 'scale(1)';
            }, 100);
        }, { passive: true });
