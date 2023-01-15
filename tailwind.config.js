/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      'lime-green': 'hsl(163, 72%, 41%)',
      'bright-red': 'hsl(356, 69%, 56%)',
      facebook: 'hsl(208, 92%, 53%)',
      twitter: 'hsl(203, 89%, 53%)',
      'instagram-start': 'hsl(37, 97%, 70%)',
      'instagram-end': 'hsl(329, 70%, 58%)',
      youTube: 'hsl(348, 97%, 39%)',

      // dark theme
      'dt-toggle-dark-start': 'hsl(210, 78%, 56%)',
      'dt-toggle-dark-end': 'hsl(146, 68%, 55%)',
      // BG
      'dt-very-dark-blue': 'hsl(230, 17%, 14%)',
      // Top BG Pattern
      'dt-very-darker-blue': 'hsl(232, 19%, 15%)',
      // Card BG
      'dt-dark-desaturated-blue': 'hsl(228, 28%, 20%)',
      // Text
      'dt-desaturated-blue': 'hsl(228, 34%, 66%)',

      white: 'hsl(0, 0%, 100%)',

      // light theme
      'lt-very-pale-blue': 'hsl(225, 100%, 98%)',
      'lt-grayish-blue': 'hsl(227, 47%, 96%)',
      'lt-dark-grayish-blue': 'hsl(228, 12%, 44%)',
      'lt-very-dark-blue': 'hsl(230, 17%, 14%)',
      'lt-hover': 'hsl(228, 33%, 91%)',

      // toggle
      'toggle-start': 'hsl(210, 78%, 56%)',
      'toggle-end': 'hsl(146, 68%, 55%)',
    },
    screens: {
      desktop: '1440px',
      mobile: '375px',
    },

    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
}
