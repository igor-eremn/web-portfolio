// Function to animate bars
function animateBars() {
    const progressBars = document.querySelectorAll(".progress-bar");
    progressBars.forEach(bar => {
        bar.style.animationPlayState = 'running';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('.section-container');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const target = event.target.getAttribute('data-section');
            sections.forEach(section => {
                if (section.id === target) {
                    section.style.display = 'flex';
                    
                    // Call animateBars function if the skills section is displayed
                    if (target === 'skills') {
                        animateBars();
                    }
                } else {
                    section.style.display = 'none';
                }
            });
        });
    });
});
