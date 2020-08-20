const plugin = require('tailwindcss/plugin');
const theme = require('./src/styles/tailwind/theme');
const variants = require('./src/styles/tailwind/variants');

const errPage = require('./src/styles/tailwind/components/errPage');
module.exports = {
  purge: [],
  target: 'relaxed',
  prefix: '',
  important: false,
  separator: ':',
  theme,
  variants,
  corePlugins: {},
  plugins: [],
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents(errPage);
    })
  ]
};
