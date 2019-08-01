const appName = process.env.VUE_APP_NAME;

module.exports = {
  publicPath: 
    process.env.NODE_ENV === 'production' ? `${appName}/public` : `/${appName}/`,

  outputDir: '../public',

  indexPath: 
    process.env.NODE_ENV === 'production'
      ? '../resources/views/index.blade.php'
      : 'index.html'
}