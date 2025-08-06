// Hello World Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const helloText = document.querySelector('h1');
    const subtitle = document.querySelector('p');
    const body = document.body;
    
    // Color palette for dynamic effects
    const colors = [
        '#667eea',
        '#764ba2',
        '#f093fb',
        '#f5576c',
        '#4facfe',
        '#43e97b',
        '#fa709a',
        '#ffecd2'
    ];
    
    // Initialize interactive features
    init();
    
    function init() {
        addClickInteraction();
        addKeyboardInteraction();
        addMouseEffects();
        addLoadAnimation();
    }
    
    // Add click interaction to change colors
    function addClickInteraction() {
        if (helloText) {
            helloText.addEventListener('click', function() {
                const randomColor = getRandomColor();
                this.style.color = randomColor;
                this.style.transform = 'scale(1.1)';
                
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 200);
                
                // Add ripple effect
                createRipple(event, this);
            });
        }
    }
    
    // Add keyboard interaction (spacebar to change background)
    function addKeyboardInteraction() {
        document.addEventListener('keydown', function(event) {
            if (event.code === 'Space') {
                event.preventDefault();
                changeBackgroundGradient();
            }
            
            if (event.code === 'Enter' && helloText) {
                helloText.click();
            }
        });
    }
    
    // Add mouse movement effects
    function addMouseEffects() {
        document.addEventListener('mousemove', function(event) {
            const mouseX = event.clientX / window.innerWidth;
            const mouseY = event.clientY / window.innerHeight;
            
            if (helloText) {
                const moveX = (mouseX - 0.5) * 20;
                const moveY = (mouseY - 0.5) * 20;
                
                helloText.style.textShadow = `
                    ${moveX}px ${moveY}px 20px rgba(0,0,0,0.1),
                    ${moveX * 2}px ${moveY * 2}px 40px rgba(0,0,0,0.05)
                `;
            }
        });
    }
    
    // Add loading animation
    function addLoadAnimation() {
        setTimeout(() => {
            if (helloText) {
                helloText.style.opacity = '1';
                helloText.style.transform = 'translateY(0)';
            }
            
            if (subtitle) {
                setTimeout(() => {
                    subtitle.style.opacity = '1';
                    subtitle.style.transform = 'translateY(0)';
                }, 300);
            }
        }, 100);
    }
    
    // Get random color from palette
    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    // Change background gradient
    function changeBackgroundGradient() {
        const color1 = getRandomColor();
        const color2 = getRandomColor();
        const angle = Math.floor(Math.random() * 360);
        
        body.style.background = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
    }
    
    // Create ripple effect
    function createRipple(event, element) {
        const ripple = document.createElement('span');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
            z-index: 1000;
        `;
        
        element.style.position = 'relative';
        element.appendChild(ripple);
        
        // Remove ripple after animation
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
            }
        }, 600);
    }
    
    // Add CSS animation for ripple effect
    if (!document.querySelector('#ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
            
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add floating particles effect
    function createFloatingParticles() {
        const particleCount = 20;
        
        for (let i = 0; i < particleCount; i++) {
            setTimeout(() => {
                createParticle();
            }, i * 200);
        }
    }
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.6);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
            left: ${Math.random() * 100}vw;
            top: 100vh;
            animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
        `;
        
        document.body.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 7000);
    }
    
    // Add floating animation
    if (!document.querySelector('#particle-styles')) {
        const style = document.createElement('style');
        style.id = 'particle-styles';
        style.textContent = `
            @keyframes float {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Start particle effect
    createFloatingParticles();
    
    // Restart particle effect every 10 seconds
    setInterval(createFloatingParticles, 10000);
    
    // Add instructions for user interaction
    function showInstructions() {
        const instructions = document.createElement('div');
        instructions.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            padding: 15px 25px;
            border-radius: 25px;
            font-size: 14px;
            color: rgba(255, 255, 255, 0.8);
            text-align: center;
            z-index: 1000;
            animation: fadeInUp 1s ease-out 2s both;
            border: 1px solid rgba(255, 255, 255, 0.2);
        `;
        
        instructions.innerHTML = `
            <div>Click the text • Press spacebar • Move your mouse</div>
        `;
        
        document.body.appendChild(instructions);
        
        // Hide instructions after 5 seconds
        setTimeout(() => {
            instructions.style.animation = 'fadeInUp 0.5s ease-out reverse both';
            setTimeout(() => {
                if (instructions.parentNode) {
                    instructions.parentNode.removeChild(instructions);
                }
            }, 500);
        }, 5000);
    }
    
    // Show instructions after initial load
    setTimeout(showInstructions, 3000);
});