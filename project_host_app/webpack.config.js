const HtmlWebPackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;
const path = require("path");
const deps = require("./package.json").dependencies;

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./public/index.html",
    filename: "./index.html"
})
module.exports ={
    entry: './src/index.js',
    mode: 'development',
    devServer:{
        static: path.join(__dirname, "public"),
        port:3000,
        historyApiFallback:true,
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/',
        assetModuleFilename:'images/[hash][ext][query]'
    },
    module: {
        rules:[
            {
                test: /\.(png|jpg|jpeg|svg)$/,
                exclude: /node_modules/,
                use: {
                  loader: "file-loader",
                },
            },
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'], // Agrega esta línea
                    },
                }
            },
            {
                test: /\.(css|s[ac]ss)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ]
    },
    plugins:[
        htmlPlugin,
        new ModuleFederationPlugin({
            name: "Host_App",
            filename: "remoteEntry.js",
            remotes: {
                // 'ActorList': "Microfrontend1@http://localhost:3001/remoteEntry.js",
                // 'MovieList': "Microfrontend2@http://localhost:3002/remoteEntry.js",
            },
            exposes: {},
            // shared: {
            //     react: { 
            //       eager: true,
            //       singleton: true, /
            //       requiredVersion: deps.react, 
            //     },
            //     "react-dom": {
            //       singleton: true,
            //       requiredVersion: deps["react-dom"],
            //     },
            // },
        }),
    ],
};


