import loadUV from './utils/loadUV';
export function initialize(options, callback) {
  loadUV(options, callback);
}
export default {
  initialize: initialize
};