import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import tailwindcssTypography from "@tailwindcss/typography";
import { fontFamily } from "tailwindcss/defaultTheme.js";

const config = {
  darkMode: ["class"],
  content: [
    "src/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "../../packages/ui/src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ["var(--font-geist)", ...fontFamily.sans],
        mono: ["var(--font-mono)", ...fontFamily.mono],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        /* background: "hsl(var(--background))",*/
        background: "var(--background)",
       /* foreground: "hsl(var(--foreground))", */
       foreground: "var(--foreground)",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      typography: () => ({
        sustainyeg: {
          css: {
            '--tw-prose-body': '#1A1A1A',
            '--tw-prose-headings': '#1A1A1A',
            '--tw-prose-lead': 'var(--color-pink-700)',
            '--tw-prose-links': 'var(--color-pink-900)',
            '--tw-prose-bold': 'var(--color-pink-900)',
            '--tw-prose-counters': 'var(--color-pink-600)',
            '--tw-prose-bullets': 'var(--color-pink-400)',
            '--tw-prose-hr': 'var(--color-pink-300)',
            '--tw-prose-quotes': 'var(--color-pink-900)',
            '--tw-prose-quote-borders': 'var(--color-pink-300)',
            '--tw-prose-captions': 'var(--color-pink-700)',
            '--tw-prose-code': 'var(--color-pink-900)',
            '--tw-prose-pre-code': 'var(--color-pink-100)',
            '--tw-prose-pre-bg': 'var(--color-pink-900)',
            '--tw-prose-th-borders': 'var(--color-pink-300)',
            '--tw-prose-td-borders': 'var(--color-pink-200)',
            '--tw-prose-invert-body': '#F2EDD9',
            '--tw-prose-invert-headings': '#1A1A1A',
            '--tw-prose-invert-lead': 'var(--color-pink-300)',
            '--tw-prose-invert-links': 'var(--color-white)',
            '--tw-prose-invert-bold': 'var(--color-white)',
            '--tw-prose-invert-counters': 'var(--color-pink-400)',
            '--tw-prose-invert-bullets': 'var(--color-pink-600)',
            '--tw-prose-invert-hr': 'var(--color-pink-700)',
            '--tw-prose-invert-quotes': 'var(--color-pink-100)',
            '--tw-prose-invert-quote-borders': 'var(--color-pink-700)',
            '--tw-prose-invert-captions': 'var(--color-pink-400)',
            '--tw-prose-invert-code': 'var(--color-white)',
            '--tw-prose-invert-pre-code': 'var(--color-pink-300)',
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': 'var(--color-pink-600)',
            '--tw-prose-invert-td-borders': 'var(--color-pink-700)',
          },
        },
      }),
    },
  },
  plugins: [tailwindcssAnimate, tailwindcssTypography],
} satisfies Config;

export default config;
