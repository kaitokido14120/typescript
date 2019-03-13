var path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        bundle: './main.js', // Đầu vào là main.js sau khi chạy webpack build ra file bundle.js
        //tenfile: 'đường dẫn file đầu vào'
        maints: './ts/main.ts', // Đóng gói file main.ts và đổi tên đầu ra thành maints.js
        indexhtml:'./index.html'
    },
    output: {
        path: path.resolve(__dirname, 'dist'), //Định nghĩa thư mục đầu ra của file webpack sau khi đóng gói
        filename: '[name].js' //tên file đầu ra ứng với thuộc tính của đối tượng entry
    },
    //Cấu hình typescript phải cài ts-loader và configwebpack
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'], //Xử lý đóng gói các định dạng ts tsx js jsx
    },
    devtool: 'inline-source-map',
    module: {
        rules: [ //config typescript
            {
                loader: 'ts-loader',
                test: /\.tsx?$/
            },
            //config css
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            //config scss
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        name: "[name].[ext]",
                        attrs: ['img:src', 'source:src']
                    }
                }]
            }
        ],

    }
}