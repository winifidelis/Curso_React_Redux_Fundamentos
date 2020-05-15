
const webpack = require('webpack')
//responsável por extrar os arquivos CSS e aplicar os estilos com os loaders
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    //entrada
    entry: './src/index.jsx',
    //saida
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    //configuração do servidor
    devServer: {
        port: 8080,
        //pasta onde vai ler o conteudo
        contentBase: './public',
    },
    //
    resolve: {
        //extençõesq que serão interpretadas
        extensions: ['', '.js', '.jsx'],
        //apelidos que apontam para locais importantes da aplicação
        alias: {
            // o nome __dirname sempre vai apontar para o /node_modules
            modules: __dirname + '/node_modules',
            jquery: 'modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
            bootstrap: 'modules/admin-lte/bootstrap/js/bootstrap.js'
        }
    },
    plugins: [ 
        new webpack.ProvidePlugin({
            $: 'jquery',
            //abaixo eu já estou utilizando o apleito/alias
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new ExtractTextPlugin('app.css')
    ],
    module: {
        //lista de loaders
        loaders: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
            loader: 'file'
        }]
    }
}