        // Mobile Menu Toggle
        document.getElementById('mobile-menu-btn').addEventListener('click', function () {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
        });

        // Smooth scroll with offset for fixed navbar
        function smoothScrollToSection(targetId) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = 64; // Height of the fixed navbar (h-16 = 4rem = 64px)
                const targetPosition = targetElement.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }

        // Add smooth scroll to all navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');

                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }

                // Smooth scroll to section
                if (targetId && targetId !== '#') {
                    smoothScrollToSection(targetId);
                }
            });
        });

        // Parallax & Scroll Effect
        let lastScrollY = window.scrollY;
        let ticking = false;

        function updateScroll() {
            const scrollY = window.scrollY;
            const nav = document.querySelector('nav');

            // Navbar Effect
            if (scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }

            // Parallax Effect
            document.querySelectorAll('[data-speed]').forEach(el => {
                const speed = parseFloat(el.getAttribute('data-speed'));
                const yPos = -(scrollY * speed);
                el.style.transform = `translateY(${yPos}px)`;
            });

            // Reveal Animation
            document.querySelectorAll('.reveal').forEach(el => {
                const rect = el.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                if (rect.top <= windowHeight * 0.85) {
                    el.classList.add('active');
                }
            });

            lastScrollY = scrollY;
            ticking = false;
        }

        window.addEventListener('scroll', function () {
            if (!ticking) {
                window.requestAnimationFrame(updateScroll);
                ticking = true;
            }
        });

        // Initial check
        updateScroll();

        // Typing Effect
        const typingText = "Information Technology Student & Undergraduate Student";
        const typingElement = document.getElementById('typing-text');

        if (typingElement) {
            typingElement.textContent = ''; // Clear initial text
            let i = 0;

            function typeWriter() {
                if (i < typingText.length) {
                    typingElement.textContent += typingText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 50); // Speed of typing
                }
            }

            // Start typing after a small delay
            setTimeout(typeWriter, 1000);
        }

        // Initialize Vanta Globe
        if (window.VANTA) {
            VANTA.GLOBE({
                el: "#vanta-bg",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x7c3aed, // White color
                color2: 0x22d3ee, // Gray secondary color
                backgroundColor: 0x0f172a, // Black background
                size: 1.20,
                spacing: 16.00
            });
        }
