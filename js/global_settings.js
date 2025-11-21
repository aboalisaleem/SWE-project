const FONT_MAP = {
    '0': { class: 'font-small', label: 'Small' },
    '1': { class: 'font-medium', label: 'Medium' },
    '2': { class: 'font-large', label: 'Large' }
};

function applyFontSize(sizeValue) {
    document.body.classList.remove(FONT_MAP['0'].class, FONT_MAP['1'].class, FONT_MAP['2'].class);
    
    const settings = FONT_MAP[sizeValue];
    document.body.classList.add(settings.class);
    
    localStorage.setItem('fontSize', sizeValue);
}

function applyTheme(isDark) {
    if (isDark) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function loadGlobalPreferences() {
    // Load Theme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = savedTheme === 'dark';
    applyTheme(prefersDark);
    
    const savedFontSize = localStorage.getItem('fontSize') || '1'; // Default to '1' (Medium)
    applyFontSize(savedFontSize);
    
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const fontSizeSlider = document.getElementById('font-size-slider');
    const currentFontSizeDisplay = document.getElementById('current-font-size');
    
    if (darkModeToggle && fontSizeSlider && currentFontSizeDisplay) {
        darkModeToggle.checked = prefersDark;
        fontSizeSlider.value = savedFontSize;
        currentFontSizeDisplay.textContent = FONT_MAP[savedFontSize].label;
    }
}

window.onload = loadGlobalPreferences;