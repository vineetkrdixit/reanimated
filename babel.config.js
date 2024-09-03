module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@src': './src',
          '@assets': './assets',
        },
      },
    ],
    // '@babel/plugin-transform-export-namespace-from', // Add this line
    'react-native-reanimated/plugin',
  ],
};
