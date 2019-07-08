module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        root: ['./src'],
        alias: {
          Components: './src/components',
          Utils: './src/utils'
        },
      },
    ],
  ],
};
