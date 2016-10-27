module.exports = {
  
  // the entry file for the bundle
  entry: ['whatwg-fetch',__dirname + '/client/src/main.js'],
  
  // the bundle file we will get in the result
  output: {
    path: __dirname + '/client/dist/js',
    filename: 'app.js'
  },
  
  module: {

    loaders: [
      { 
        test: /\.css$/,
        loader: 'style-loader!css-loader!' 
      },

      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }

    ]
  },
};
