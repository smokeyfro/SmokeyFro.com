module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  purge: {
    content: [
      './src/assets/**/*.css',
      './src/**/*.vue',
      './src/**/*.js'
    ],
    options: {
      defaultExtractor: content => content.match(/[\w-/:%]+(?<!:)/g) || []
    },
  },
  theme: {
      extend: {
        colors: {
          accent: '#ffc800'
        },
        outline: {
          solid: '3px solid #fff',
        }
      }
  },
  variants: {
    animation: ['hover']
  },
  corePlugins: {},
  plugins: [],
}
