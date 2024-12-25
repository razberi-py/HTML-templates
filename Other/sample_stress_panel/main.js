// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    if(hamburger && nav){
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Start and Stop Attack Buttons
    const startButton = document.querySelector('.start-button');
    const stopButton = document.querySelector('.stop-button');
    const statusElement = document.querySelector('.status p');

    if (startButton && stopButton && statusElement) {
        startButton.addEventListener('click', () => {
            const targetIp = document.getElementById('target-ip').value.trim();
            const port = document.getElementById('port').value.trim();
            const duration = document.getElementById('duration').value.trim();

            if(targetIp && port && duration){
                statusElement.textContent = `Attack in progress on ${targetIp}:${port} for ${duration} seconds...`;
                statusElement.style.color = '#00c6ff';
                document.querySelector('.status').style.borderLeftColor = '#00c6ff';
                document.querySelector('.status').style.background = '#1e1e1e';
            } else {
                statusElement.textContent = 'Please fill in all fields.';
                statusElement.style.color = '#ff416c';
                document.querySelector('.status').style.borderLeftColor = '#ff416c';
                document.querySelector('.status').style.background = '#2a2a2a';
            }
        });

        stopButton.addEventListener('click', () => {
            statusElement.textContent = 'Attack stopped.';
            statusElement.style.color = '#ff416c';
            document.querySelector('.status').style.borderLeftColor = '#ff416c';
            document.querySelector('.status').style.background = '#2a2a2a';
        });
    }

    // Submit Contact Form (Simulated)
    const contactForm = document.querySelector('.contact-form');
    if(contactForm){
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you shortly.');
            contactForm.reset();
        });
    }

    // Smooth Scroll for Older Browsers (Optional)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if(href.startsWith('#')){
                e.preventDefault();
                const target = document.querySelector(href);
                if(target){
                    window.scrollTo({
                        top: target.offsetTop - 70, // Adjust for fixed header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
