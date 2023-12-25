/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{templ,go,html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

