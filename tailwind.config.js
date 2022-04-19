module.exports = {
   content: ["./*.html"],
   theme: {
      screens: {
         md: "768px",
         lg: "976px",
         xl: "1440px",
      },
      extend: {
         colors: {
            darkBlue: "hsl(240, 38%, 20%)",
            grayishBlue: "hsl(240, 18%, 77%)",
         },
         fontFamily: {
            Inter: ["'Inter'", "sans-serif"],
         },
      },
   },
   plugins: [],
};
