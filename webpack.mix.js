let mix = require('laravel-mix');

mix.js('src/main.js', 'dist/build.js');

mix.setPublicPath('dist');

mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.s[ca]ss$/,
                loaders: 'style-loader!css-loader!sass-loader'
            }
        ]
    }
});
