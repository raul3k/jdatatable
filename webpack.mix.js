let mix = require('laravel-mix')

mix

  .js('resources/js/tool.js', 'js')
  .js('resources/js/simple-datatables.js', 'js')
    .vue({ version: 2 })
    .setPublicPath('dist')
  .sass('resources/sass/tool.scss', 'css')
