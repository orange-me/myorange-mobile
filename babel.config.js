module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@hooks': './src/hooks',
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@libs': './src/libs/',
          '@utils': './src/utils',
          '@redux': './src/redux',
          '@constants': './src/constants',
          '@helpers': './src/helpers',
          '@references': './src/references',
        },
      },
    ],
  ],
};
