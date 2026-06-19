import type { Config } from "tailwindcss";

/* ============================================================
   DEBRIS REMOVAL INSURANCE — "Steel & Amber" palette
   Token NAMES are inherited from the shared component architecture;
   VALUES are remapped to deep industrial blue (primary) / burnt
   amber (secondary) / warm gold (accent) with concrete neutrals.
   clay = steel blue · sage = burnt amber · gold = warm gold
   cream = warm paper · sand = soft concrete
   ============================================================ */

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FBFAF6",
        sand: "#ECE6DB",
        white: "#FFFFFF",
        clay: {
          DEFAULT: "#1F5673",
          dark: "#163F54",
          light: "#2E6E8E",
          50: "#EAF1F5",
          100: "#CDDDE6",
          200: "#9CBACB",
          300: "#5E8AA8",
          400: "#2E6E8E",
          500: "#1F5673",
          600: "#163F54",
          700: "#102E3F",
          800: "#0B1F2B",
          900: "#071420",
        },
        sage: {
          DEFAULT: "#C2772B",
          dark: "#9A5D1F",
          light: "#D9923F",
          50: "#FBF1E7",
          100: "#F4DEC1",
          200: "#E9BC83",
          300: "#D9923F",
          400: "#CC8434",
          500: "#C2772B",
          600: "#9A5D1F",
          700: "#734617",
        },
        gold: {
          DEFAULT: "#E2A23D",
          dark: "#B57E20",
          light: "#EFBE6E",
          50: "#FCF5E8",
          100: "#F7E6C2",
          200: "#F0CE85",
          300: "#E8B14B",
          400: "#E2A23D",
          500: "#C2861F",
          600: "#9C6916",
        },
        espresso: "#1B2530",
        cocoa: "#38454F",
        mocha: "#5A6873",
        adobe: "#E0DACA",
        adobeDark: "#CBC3AE",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        arch: "2rem 2rem 2rem 2rem",
        arch2: "2.5rem 2.5rem 1.5rem 1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "sunrise-bands":
          "linear-gradient(180deg, #FBFAF6 0%, #F2EEE4 40%, #EAF1F5 70%, #FBFAF6 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(31,86,115,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(194,119,43,0.08) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #1F5673 0%, #2E6E8E 100%)",
        "sage-gradient": "linear-gradient(135deg, #C2772B 0%, #D9923F 100%)",
        "gold-gradient": "linear-gradient(135deg, #E2A23D 0%, #EFBE6E 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(22, 63, 84, 0.24), 0 4px 12px -6px rgba(27, 37, 48, 0.08)",
        "warm-lg": "0 30px 70px -20px rgba(22, 63, 84, 0.30), 0 10px 30px -10px rgba(27, 37, 48, 0.10)",
        card: "0 2px 8px -2px rgba(27, 37, 48, 0.06), 0 1px 3px -1px rgba(27, 37, 48, 0.04)",
        "card-hover": "0 20px 50px -15px rgba(22, 63, 84, 0.26), 0 8px 20px -8px rgba(27, 37, 48, 0.10)",
        arch: "inset 0 -8px 30px -10px rgba(22, 63, 84, 0.12)",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "slow-zoom": { "0%, 100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.05)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "arch-rise": { "0%": { transform: "scaleY(0.6)", opacity: "0", transformOrigin: "bottom" }, "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "bottom" } },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "arch-rise": "arch-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
