document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter_buttons button');
    const cards = document.querySelectorAll('.card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove 'active' class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add 'active' class to the clicked button
            this.classList.add('active');

            const filterName = this.getAttribute('data-name');

            cards.forEach(card => {
                const cardName = card.getAttribute('data-name');
                if (filterName === 'all' || filterName === cardName) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Show all cards by default
    document.querySelector('.filter_buttons button[data-name="all"]').click();
});
