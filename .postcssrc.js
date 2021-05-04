//ESM - 자바스크립트는 에크마스크립트 방식
//CommonJS - nodeJS는 CommonJS 방식

//import autoprefixer from 'autoprefixer'

// export {
//   plugin: [
//     autoprefixer
//   ]
// }

module.exports = {
  plugin: [
    require('autoprefixer')
  ]
}

