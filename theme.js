// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    
    // Check for saved user preference, if any, on load
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply the saved theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Set the toggle state based on current theme
    if (themeToggle) {
        themeToggle.checked = currentTheme === 'dark';
        
        // Theme toggle change event
        themeToggle.addEventListener('change', function() {
            const newTheme = this.checked ? 'dark' : 'light';
            
            // Update theme and save to localStorage
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Update the toggle state
            this.checked = (newTheme === 'dark');
        });
    }
    
    // Also check for system preference if no theme is set
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    if (!localStorage.getItem('theme') && prefersDarkScheme.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (themeToggle) themeToggle.checked = true;
    }
});
