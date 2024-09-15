function setupMenuScroll() {
    const menuItems = document.querySelectorAll('.menu div');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('target');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', setupMenuScroll);

function nameAnimation() {
    const nameElement = document.querySelector('.name');

    const nameText = nameElement.textContent;
    nameElement.textContent = '';

    nameText.split('').forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.animationDelay = `${(index + 1)}s`;
        nameElement.appendChild(span);
    });
}

nameAnimation();
