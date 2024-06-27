document.addEventListener('DOMContentLoaded', function () {
    const flexContainer = document.querySelector('.flex-container');
    const gapInput = document.getElementById('gap');
    const flexDirectionButtons = document.querySelectorAll('.flex-direction');
    const justifyContentButtons = document.querySelectorAll('.justify-content');
    const alignItemsButtons = document.querySelectorAll('.align-items');
    const resetFlexboxButton = document.getElementById('resetFlexbox');
    const resetGrowButton = document.getElementById('resetGrow');
    const growAllButton = document.getElementById('growAll');
    const box1GrowInput = document.getElementById('box1Grow');
    const box2GrowInput = document.getElementById('box2Grow');
    const box3GrowInput = document.getElementById('box3Grow');

    // Initialize gap value
    gapInput.addEventListener('input', function () {
        flexContainer.style.gap = `${this.value}px`;
    });

    // Set initial flex-direction to row
    flexDirectionButtons.forEach(button => {
        button.addEventListener('click', function () {
            flexContainer.style.flexDirection = this.dataset.direction;
        });
    });

    // Set justify-content
    justifyContentButtons.forEach(button => {
        button.addEventListener('click', function () {
            flexContainer.style.justifyContent = this.dataset.justify;
        });
    });

    // Set align-items
    alignItemsButtons.forEach(button => {
        button.addEventListener('click', function () {
            flexContainer.style.alignItems = this.dataset.align;
        });
    });

    // Reset Flexbox
    resetFlexboxButton.addEventListener('click', function () {
        flexContainer.style.gap = '0';
        gapInput.value = '0';
        flexContainer.style.flexDirection = 'row';
        flexDirectionButtons.forEach(button => {
            if (button.dataset.direction === 'row') {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
        flexContainer.style.justifyContent = 'flex-start';
        justifyContentButtons.forEach(button => {
            if (button.dataset.justify === 'flex-start') {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
        flexContainer.style.alignItems = 'stretch';
        alignItemsButtons.forEach(button => {
            if (button.dataset.align === 'stretch') {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    });

    // Reset Grow
    resetGrowButton.addEventListener('click', function () {
        box1GrowInput.value = '0';
        box2GrowInput.value = '0';
        box3GrowInput.value = '0';
        document.querySelectorAll('.flex-item').forEach(item => {
            item.style.flexGrow = '0';
        });
    });

    // Grow All
    growAllButton.addEventListener('click', function () {
        document.querySelectorAll('.flex-item').forEach(item => {
            item.style.flexGrow = '1';
        });
    });

    // Handle individual box grow inputs
    box1GrowInput.addEventListener('input', function () {
        document.getElementById('box1').style.flexGrow = this.value;
    });

    box2GrowInput.addEventListener('input', function () {
        document.getElementById('box2').style.flexGrow = this.value;
    });

    box3GrowInput.addEventListener('input', function () {
        document.getElementById('box3').style.flexGrow = this.value;
    });
});