const { DefinePlugin } = require('webpack'); //added 
module.exports = {
    mode: 'production',
    plugins: [
      new DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production'),
        }
      }),
    ],
    devtool: 'source-map',
  };


  //give it the above content. 
  //Add:
  // plugins: [
  //   new DefinePlugin({
  //     'process.env': {
  //       'NODE_ENV': JSON.stringify('production'),
  //     }
  //   }),
  // ],