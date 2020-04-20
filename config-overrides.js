<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
 const { override, fixBabelImports, addLessLoader } = require('customize-cra');

 module.exports = override(
   fixBabelImports('import', {
     libraryName: 'antd',
     libraryDirectory: 'es',
     style: true,
   }),
   addLessLoader({
       javascriptEnabled: true,
       modifyVars: { '@primary-color': '#1DA57A' },
    }),
=======
=======
>>>>>>> 0766ece441bb4b4b7e19ff2aa0e9a4f00dc976da
=======
>>>>>>> 0766ece441bb4b4b7e19ff2aa0e9a4f00dc976da
const { override, fixBabelImports } = require('customize-cra');

// - module.exports = function override(config, env) {
// -   // do stuff with the webpack config...
// -   return config;
// - };
module.exports = override(
   fixBabelImports('import', {
     libraryName: 'antd',
     libraryDirectory: 'es',
     style: 'css',
   }),
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0766ece441bb4b4b7e19ff2aa0e9a4f00dc976da
=======
>>>>>>> 0766ece441bb4b4b7e19ff2aa0e9a4f00dc976da
=======
>>>>>>> 0766ece441bb4b4b7e19ff2aa0e9a4f00dc976da
 );