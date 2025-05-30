// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const toggleIcon = document.getElementById('toggle-icon');

    // Check if dark mode is already enabled
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.checked = true;
        toggleIcon.innerHTML = '<i class="fas fa-moon"></i>';
    }

    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            toggleIcon.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
            toggleIcon.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });
});

// Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (nameInput.value.trim() === "") {
            alert("Name is required.");
            return;
        }

        if (emailInput.value.trim() === "" || !isValidEmail(emailInput.value)) {
            alert("Please enter a valid email address.");
            return;
        }

        const name = nameInput.value;
        const email = emailInput.value;

        console.log("Form submitted:", { name, email });

        // Clear form fields
        nameInput.value = "";
        emailInput.value = "";

        alert("Thank you for your submission!");
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

// Fetching Data from an API
document.addEventListener('DOMContentLoaded', function() {
    const fetchDataButton = document.getElementById('fetchDataBtn');
    const dataContainer = document.getElementById('dataContainer');

    fetchDataButton.addEventListener('click', function() {
        fetchData()
            .then(data => {
                dataContainer.textContent = data;
            })
            .catch(error => {
                dataContainer.textContent = "Error fetching data.";
            });
    });

    async function fetchData() {
        const response = await fetch("https://api.example.com/data");
        if (response.ok) {
            const data = await response.text();
            return data;
        } else {
            throw new Error("Network response was not ok.");
        }
    }
});

// Keyboard-controlled Movement
document.addEventListener('DOMContentLoaded', function() {
    const movableElement = document.getElementById('movableElement');
    let x = 0;
    let y = 0;

    document.addEventListener('keydown', function(event) {
        switch (event.key) {
            case 'ArrowUp':
                y -= 10;
                break;
            case 'ArrowDown':
                y += 10;
                break;
            case 'ArrowLeft':
                x -= 10;
                break;
            case 'ArrowRight':
                x += 10;
                break;
        }
        movableElement.style.left = x + 'px';
        movableElement.style.top = y + 'px';
    });

    // Set initial position
    movableElement.style.position = 'absolute';
    movableElement.style.left = '0px';
    movableElement.style.top = '0px';
});

// Changing Background Color
document.addEventListener('DOMContentLoaded', function() {
    const colorButton = document.getElementById('changeColorBtn');

    colorButton.addEventListener('click', function() {
        document.body.style.backgroundColor = getRandomColor();
    });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});

// Copy Code Blocks
document.addEventListener('DOMContentLoaded', function() {
    const codeBlocks = document.querySelectorAll('pre');

    codeBlocks.forEach(block => {
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.textContent = 'Copy';

        copyButton.addEventListener('click', function() {
            const code = block.querySelector('code').innerText;
            navigator.clipboard.writeText(code)
                .then(() => {
                    alert('Code copied to clipboard!');
                })
                .catch(err => {
                    alert('Failed to copy code: ', err);
                });
        });

        block.appendChild(copyButton);
    });
});
