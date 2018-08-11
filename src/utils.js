/**
 * Whining helper
 * @param  {String} message
 */
export const warn = function (...message) {
  /* eslint-disable */
  console.warn(`[vue-image-loader] ${message.join(' ')}`)
  /* eslint-enable */
}

export const is = function (value) {
  return typeof value !== 'undefined' && value !== null
}
