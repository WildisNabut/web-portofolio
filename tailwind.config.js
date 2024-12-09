module.exports = {
  darkMode: "class", // Aktifkan dark mode
  content: [
    "./index.html", // File HTML di root proyek
    "./src/**/*.{html,js}", // Semua file HTML dan JS di dalam folder src
  ],
  theme: {
    extend: {
      animation: {
        background: "changeBackground 20s infinite", // Definisi animasi
      },
      keyframes: {
        changeBackground: {
          "0%": { backgroundImage: "url('img/1.avif')" },
          "25%": { backgroundImage: "url('img/2.avif')" },
          "50%": { backgroundImage: "url('img/3.avif')" },
          "75%": { backgroundImage: "url('img/4.avif')" },
          "100%": { backgroundImage: "url('img/5.avif')" },
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        handwriting: ["Caveat", "cursive"],
        anton: ["Anton", "sans-serif"],
        dancing: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
};
