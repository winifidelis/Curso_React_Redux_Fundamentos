//a variavel abaixo está sendo setada apartir do package.json
//ela informa que tipo de ambiente está rodando a aplicação
const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
// ExtractTextPlugin foi adicionado no ex.10
//const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    //mode: 'development',
    //depois de ter criado a const modoDev faço a linha abaixo
    mode: modoDev ? 'development' : 'production',
    //mode:'production',
    entry: './src/principal.js',

    //arquivo de saída
    output: {
        filename: 'principal.js',
        //abaixo o local onde serão gerados
        //__dirname é uma variável do próprio node
        path: __dirname + '/public'
    },
    //estou adicionando um webserver para a aplicação
    //ele ja tem tudo pronto, por exemplo o autoload
    devServer: {
        contentBase: "./public",
        port: 9000
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            //parametros do arquivo que vai ser gerado apartir da interpretação dos arquivos CSS
            //utilizando isso aqui o arquivo CSS vai ser gerado dentro da pasta public
            //se eu não usar isso e usar style-loader o CSS vai ser gerado dentro do arquivo javascript
            filename: 'estilo.css'
        })
    ],
    module: {
        //irei colocar os meus loaders aqui dentro
        //por exemplo para que ele reconheça o CSS que existe
        //e não apresente erros eu irei mostrar a existencia dele aqui
        rules: [{
            //test: /\.css$/,
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,//la em cima isso aqui está interpretando arquivos CSS
                //O MiniCssExtractPlugin é conflitante com o style-loader, então comentei o style-loader
                //'style-loader', //Responsável por adicionar dentro da DOM o CSS <style>
                'css-loader',//responsável por interpretar os imports, url(url de uma imagem)...
                'sass-loader',
            ]
        }, {
            //abaixo eu faço as imagens aparecer
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}