/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        pink: {
          DEFAULT: "hsl(var(--pink))",
          foreground: "hsl(var(--pink-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
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
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#334155',
            lineHeight: '1.8',
            p: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
            h2: {
              fontFamily: 'Space Grotesk, system-ui, sans-serif',
              fontWeight: '700',
              marginTop: '2em',
              marginBottom: '1em',
              color: '#0f172a',
              borderBottom: '1px solid #e2e8f0',
              paddingBottom: '0.5em',
            },
            h3: {
              fontFamily: 'Space Grotesk, system-ui, sans-serif',
              fontWeight: '600',
              marginTop: '1.5em',
              marginBottom: '0.75em',
              color: '#1e293b',
            },
            a: {
              color: '#0d9488',
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                color: '#0f766e',
                textDecoration: 'underline',
              },
            },
            strong: {
              color: '#0f172a',
              fontWeight: '600',
            },
            ul: {
              marginTop: '1em',
              marginBottom: '1em',
            },
            li: {
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
            table: {
              width: '100%',
              borderCollapse: 'collapse',
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            'thead th': {
              backgroundColor: '#f1f5f9',
              padding: '0.75rem',
              textAlign: 'left',
              fontWeight: '600',
            },
            'tbody td': {
              padding: '0.75rem',
              borderBottom: '1px solid #e2e8f0',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};