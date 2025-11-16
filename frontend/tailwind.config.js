module.exports = {
    theme: {
        extend: {
            fontFamily: {
                dmSans: ["var(--font-dm-sans)", "sans-serif"],
            },
            keyframes: {
                fade: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
                slideUp: {
                    "0%": { opacity: 0, transform: "translateY(20px)" },
                    "100%": { opacity: 1, transform: "translateY(0)" },
                },
                scaleIn: {
                    "0%": { opacity: 0, transform: "scale(0.9)" },
                    "100%": { opacity: 1, transform: "scale(1)" },
                }
            },
            animation: {
                fade: "fade 0.6s ease-out",
                slideUp: "slideUp 0.6s ease-out",
                scaleIn: "scaleIn 0.6s ease-out",
            }
        },
    },
};
