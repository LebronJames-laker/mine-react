<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a2e46ab52f53ab8b2d02787db49efe454270d4ff
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
<<<<<<< HEAD
=======
>>>>>>> 0766ece441bb4b4b7e19ff2aa0e9a4f00dc976da
=======
>>>>>>> 0766ece441bb4b4b7e19ff2aa0e9a4f00dc976da
=======
>>>>>>> a2e46ab52f53ab8b2d02787db49efe454270d4ff
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
<<<<<<< HEAD
>>>>>>> 0766ece441bb4b4b7e19ff2aa0e9a4f00dc976da
=======
>>>>>>> 0766ece441bb4b4b7e19ff2aa0e9a4f00dc976da
=======
=======
>>>>>>> a2e46ab52f53ab8b2d02787db49efe454270d4ff
>>>>>>> 0766ece441bb4b4b7e19ff2aa0e9a4f00dc976da
 );