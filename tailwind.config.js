// tailwind.config.js
module.exports = {
  content: [
    // Use *.tsx if using TypeScript
    "./pages/**/*.js",
    "./components/**/*.js",
  ],
  theme: {
    extend: {
      letterSpacing: {
        one: '1em'
      }},
      translate: {
        center: '-50%'
      }
    }
};
