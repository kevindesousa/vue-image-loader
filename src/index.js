import image from './component/image.vue'

// /**
//  * Merges plugin installation options with a component
//  * @param  {VueComponent} component
//  * @param  {Object} options
//  * @return {VueComponent}
//  */
// const mergeOptions = function (component, options = {}) {
//   return {
//     ...component,
//     data: () => ({ options })
//   }
// }

/**
 * Vue installation method
 * @param  {VueInstance} Vue
 * @param  {Object} [options={}]
 */
const install = function (Vue, options = {}) {
  Vue.component('image-loader', image)
}

export default {
  install
}
