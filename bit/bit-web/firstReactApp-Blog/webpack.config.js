module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "./src/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"]
            },
            {
                test: /\.css$/,
                loaders: ["style-loader" , "css-loader"]
            },
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     loaders: ["eslint-loader"]
            // }
        ]
    }
};
  