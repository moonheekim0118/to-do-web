const path= require('path');

module.exports ={
    mode : "development",
    entry :{ 
        index:"./public/js/index.js",
        todayTodo:"./public/js/today.js",
        sign:"./public/js/sign.js"
        
    },
    output:{
        path: path.resolve(__dirname,"dist"),
        filename: '[name]_bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/i, 
                use: ['style-loader', 'css-loader']
                
            },
            {
                test: /\.(gif|png|jpe?g|svg|webp)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true, // webpack@1.x
                      disable: true, // webpack@2.x and newer
                    },
                  },
                ],
              },
            {
                test: /\.ejs$/,
                loader: 'ejs-loader',
                options: {
                  variable: 'data',
                  interpolate : '\\{\\{(.+?)\\}\\}',
                  evaluate : '\\[\\[(.+?)\\]\\]'
                }
            },
        ]
    }
}