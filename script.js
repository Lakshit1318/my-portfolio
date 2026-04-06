const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const icon = toggleBtn.querySelector('i');

// 1. INITIAL CHECK: Run this as soon as the page loads
function applySavedTheme() {
    const savedTheme = localStorage.getItem('portfolio-theme');
    
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        if (icon) icon.classList.replace('fa-moon', 'fa-sun');
    }
}

// Execute the check immediately
applySavedTheme();

// 2. THE TOGGLE LOGIC: Run this when the button is clicked
if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        
        // Check if we just turned on dark mode
        const isDark = body.classList.contains('dark-theme');
        
        // Update the Icon
        if (isDark) {
            if (icon) icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('portfolio-theme', 'dark'); // Save choice
        } else {
            if (icon) icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('portfolio-theme', 'light'); // Save choice
        }
    });
}