// Get all tab buttons and content
const tabButtons = document.querySelectorAll('.dock button');
const tabContents = document.querySelectorAll('.tab-content');

// Add click event to each tab button
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Add click animation to button
        button.classList.add('animated', 'btn-click');
        setTimeout(() => {
            button.classList.remove('animated', 'btn-click');
        }, 150);
        
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('dock-active'));
        tabContents.forEach(content => content.classList.remove('active-tab'));
        
        // Add active class to clicked button
        button.classList.add('dock-active');
        
        // Get the corresponding content id and activate it
        const contentId = button.id.replace('-tab', '-content');
        const contentElement = document.getElementById(contentId);
        contentElement.classList.add('active-tab', 'animated', 'fadeIn');
        
        // Remove animation class after animation completes
        contentElement.addEventListener('animationend', () => {
            contentElement.classList.remove('animated', 'fadeIn');
        }, { once: true });
    });
});

// Add animation to all buttons in the application
document.addEventListener('DOMContentLoaded', () => {
    const allButtons = document.querySelectorAll('button:not(.dock button)');
    
    allButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.add('animated', 'pulse');
            setTimeout(() => {
                this.classList.remove('animated', 'pulse');
            }, 300);
        });
    });
});