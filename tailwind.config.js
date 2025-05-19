// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./*.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        // Light Theme - UPDATED
        'light-bg': '#F8F9FA',          // Main page background: A very light, soft gray (like Bootstrap's default bg)
        'light-text': '#212529',        // Main text: Dark gray
        'light-secondary-text': '#6C757D', // Secondary text: Medium gray
        'light-card-bg': '#FFFFFF',     // Card background: Keep as pure white for now, or change to a slightly warmer off-white like '#FEFEFE' or a very light cream if #F8F9FA is too similar.
                                        // OR, let's try making cards slightly distinct from the main bg:
                                        // 'light-card-bg': '#FDFDFD', // A very, very subtle off-white for cards
                                        // For a more noticeable difference, if light-bg is #F8F9FA, then cards could be #FFFFFF.
                                        // Let's make the main bg even lighter, and cards a soft gray for this example.
        'light-bg-main': '#FFFFFF',      // NEW: Pure white for the absolute main page background
        'light-section-bg': '#F8F9FA',   // NEW: Very light gray for section backgrounds on top of main
        'light-card-content-bg': '#FFFFFF',// NEW: White for content cards within sections

        'light-heading': '#111827',     // Headings: Near black
        'light-accent': '#A0522D',      // Accent: Sienna (a brownish-red, sophisticated) or keep #B08D57 (Bronze)
        'light-accent-hover': '#804023',// Darker Sienna for hover
        'light-border': '#DEE2E6',      // Borders: Light gray

        // Dark Theme
        'dark-bg': '#121212',
        'dark-text': '#E0E0E0',
        'dark-secondary-text': '#A0A0A0',
        'dark-card-bg': '#1E1E1E',
        'dark-heading': '#F5F5F5',
        'dark-accent': '#E6B325', 
        'dark-accent-hover': '#D4A01A',
        'dark-border': '#333333',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Lora', 'serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}