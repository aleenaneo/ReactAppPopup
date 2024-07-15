const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/Popupshowing.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'Popupshowing.bundle.[chunkhash].js',
      library: 'Popupshowing',
      libraryTarget: 'umd',
      umdNamedDefine: true,
      globalObject: 'this'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [
                ['@babel/plugin-transform-react-jsx', { pragma: 'React.createElement' }],
                '@babel/plugin-transform-react-jsx-self',
              ]
            },
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
      ],
    },
  };