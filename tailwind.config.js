const theme = require('tailwindcss/defaultTheme')
const formPlugin = require('@tailwindcss/forms')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        ...theme.fontFamily,
        sans: ['Inter', ...theme.fontFamily.serif],
      },
      colors: {
        pink: {
          500: '#E4526E',
          600: '#E13F5E',
          700: '#CA3854',
        },
        general: {
          base: {
            100: '#382f66',
            200: '#2c274f',
            300: '#252046',
            400: '#1d1546',
            500: '#151136',
            600: '#211d41',
          },
          grey: {
            100: '#b3b4d0',
            200: '#8890b5',
            300: '#6b6889',
            400: '#828396',
          },
          blue: {
            100: '#85d0ff',
            200: '#38c6f4',
            300: '#36a5d7',
            400: '#3485ba',
            500: '#32649d',
            600: '#304480',
          },
          gold: {
            100: '#f5d075',
            200: '#f2bf43',
            300: '#efaf15',
            400: '#8f680a',
          },
          orange: {
            100: '#ff8916',
            200: '#fc7c00',
            300: '#c96403',
            400: '#6b4622',
          },
          yellow: {
            100: '#ffb257',
            200: '#614e3c',
          },
          cherry: {
            100: '#d74661',
            200: '#ce2c49',
            300: '#a4233a',
            400: '#691625',
          },
          red: {
            100: '#e54787',
            200: '#612658',
          },
          green: {
            100: '#47cc42',
            200: '#3ea83a',
            300: '#33504b',
          },
          purple: {
            100: '#bf3cd5',
          },
          'social-network': {
            riot: '#bf373b',
            google: '#db4437',
            youtube: '#e63621',
            faceit: '#ff5500',
            reddit: '#ff5700',
            steam: '#5c7e0f',
            twitch: '#6441a5',
            discord: '#7289da',
            facebook: '#0773f6',
            twitter: '#1da1f2',
          },
          lol: {
            tier: {
              iron: '#b5a58b',
              bronze: '#8c523a',
              silver: '#84969b',
              gold: '#f0b753',
              platinum: '#4a927c',
              diamond: '#716bf6',
              master: '#ed5eba',
              grandmaster: '#ce4039',
              challenger: '#40c0de',
            },
            gpi: {
              fighting: '#f46b1b',
              farming: '#f8d749',
              vision: '#5acbf5',
              aggression: '#bc3435',
              survivability: '#9651d6',
              consistency: '#d4a7c4',
              versatility: '#dd3583',
              objectives: '#8bcc54',
            },
            keystone: {
              precision: '#dca35c',
              domination: '#b55862',
              sorcery: '#9facfa',
              resolve: '#70ca69',
              inspiration: '#80d1e8',
            },
          },
          tft: {
            champion: {
              level: {
                1: '#afafaf',
                2: '#1bc660',
                3: '#0b6cc3',
                4: '#f947c6',
                5: '#fe8900',
                6: '#75dff9',
                7: '#ac2185',
                8: '#f3cf5a',
              },
            },
          },
          placement: {
            first: {
              100: '#e5a109',
              200: '#a27207',
            },
            second: {
              100: '#cccaca',
              200: '#858585',
            },
            third: {
              100: '#d7977b',
              200: '#6f4939',
            },
            fourth: {
              100: '#bba17a',
            },
          },
          abilities: {
            haste: '#ece1cc',
            power: '#9ffaf2',
            armor: '#ee573d',
            speed: '#fbc74a',
            damage: '#f28017',
            'crit-chance': '#ff7761',
            health: '#17a25d',
            'magic-resist': '#d18dd1',
            mana: '#24c3f4',
            flex: '#7c49f6',
          },
          light: {
            green: {
              100: '#1dc49b',
            },
          },
          dark: {
            blue: {
              100: '#7375c9',
              200: '#565895',
              300: '#3a3c72',
              400: '#333459',
              500: '#25204a',
            },
          },
        },
        purple: '#aaabca',
        success: '#00b972',
        greeny: '#4cb748',
        'greeny-blue': '#3cbdc2',
        gold: '#bd9e59',
        'strong-cyan': '#18bd9b',
        mpink: '#c848c3',
        'bright-pink': '#ff2576',
        twilight: '#565697',
        yellow: '#ffc306',
        'dark-violet': '#252146',
        martinique: '#2e2a4f',
        'kinky-shark': '#392b68',
        'satiric-shark': '#312955',
        'arid-shark': '#3b2d6a',
        chosen: '#ad4cce',
        'black-russian': '#11172c',
        black: '#000',
        warning: '#ffb257',
        'tags-soon': '#6c65b4',
      },
    },
  },
  plugins: [formPlugin],
}
