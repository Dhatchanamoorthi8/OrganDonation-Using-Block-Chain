const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: "./src/main.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),

  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./src/index.html", to: "index.html" }
      ],
      options: {
        // any additional options
      }
    })
  ]
}
