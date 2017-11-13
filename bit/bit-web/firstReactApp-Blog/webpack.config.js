module.exports = {
    entry: "./index.js",
    output: {
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"]
            },
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     loaders: ["eslint-loader"]
            // }
        ]
    }
};
  