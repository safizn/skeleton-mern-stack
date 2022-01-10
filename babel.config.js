module.exports = {
    "presets": [
      ["@babel/preset-env", { 
        // adds polyfills globally, exclusive to @babel/transform-runtime
        // "useBuiltIns": "usage", 
        // "corejs": { 
        //   "version": "3", 
        //   "proposals": "true", 
        //   "modules": "false"
        // } 
      }],
      ["@babel/preset-react", { 
        // "runtime": "automatic" 
      }]
    ],
    "plugins": [
      ["@babel/plugin-transform-runtime", { corejs: 3 }],
      "react-hot-loader/babel",
      "@babel/plugin-proposal-class-properties"
    ]
}




// SETUP FROM COURSE
// The Babel docs explain how you can take advantage of Babel's built-in "Polyfill auto injecting" feature: https://babeljs.io/docs/en/babel-polyfill
// Simply install two packages:
// npm install --save core-js
// and
// npm install --save regenerator-runtime 

// Change the config of your @babel/preset-env  babel preset in the .babelrc  file: 

// "presets": [
//     ["@babel/preset-env", {
//         "targets": {
//             "browsers": [
//                 "> 1%",
//                 "last 2 versions"
//             ]
//         },
//         "useBuiltIns": "usage"
//      }],
//     ...
//  ],