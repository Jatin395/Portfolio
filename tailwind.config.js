/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		width: {
  			Large: '600px'
  		},
  		backgroundColor: {
  			VoiletLight: 'rgb(35, 39, 50)',
  			BlueD: 'rgb(25, 30, 54)',
  			BlueLight: 'rgb(82, 176, 244)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
