const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@root': path.join(path.resolve(__dirname)),
      '@src': path.join(path.resolve(__dirname, './src')),
      '@assets': path.join(path.resolve(__dirname, './src/assets')),
      '@components': path.join(path.resolve(__dirname, './src/components')),
    },
  },
};
