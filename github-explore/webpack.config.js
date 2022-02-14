const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', 'ts', 'tsx']
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(), // caso não estejamos em desenvolvimente, o isDevelopment pode retornar false, e false não é um plugin válido
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ].filter(Boolean), // para resolver esse problema podemos usar esse 'hack' dessa forma a condicional vai funcionar normalmente
  devServer: {
    static: path.resolve(__dirname, 'public'),
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx$/, // configurando para informar que o arquivo pode ser tanto 'jsx' quabti 'tsx'
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // configuração do fast refresh
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel')
            ].filter(Boolean)
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}
