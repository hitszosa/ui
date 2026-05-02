import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        osa: {
          50: '#F7F7FD',
          100: '#D5D5F4',
          200: '#B1B1ED',
          300: '#8D8DE6',
          400: '#6868E0',
          500: '#4242DB',
          600: '#2323CC',
          700: '#1919A7',
          800: '#111180',
          900: '#191948',
          950: '#0F0F24',
        },
        accent: {
          50: '#FEFCF5',
          100: '#FDF3D6',
          200: '#FCEBB7',
          300: '#FCE296',
          400: '#FCDA75',
          500: '#FDD353',
          600: '#FFC518',
          700: '#DEA700',
          800: '#A57C00',
          900: '#6C5100',
          950: '#2C2307',
        },
      },
    },
  },
} satisfies Config
