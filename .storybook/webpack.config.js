const path = require('path');

module.exports = ({ config, mode }) => {
  config.resolve.alias = {
    '@': path.resolve(__dirname, '../resources'),
    constants: path.resolve(__dirname, '../src/common/constants.tsx'),
  };
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]],
          plugins: [
            [
              require.resolve('babel-plugin-named-asset-import'),
              {
                loaderMap: {
                  svg: {
                    ReactComponent: '@svgr/webpack?-svgo,+titleProp,+ref![path]',
                  },
                },
              },
            ],
          ],
        },
      },
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]],
        },
      },
      require.resolve('react-docgen-typescript-loader'),
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
