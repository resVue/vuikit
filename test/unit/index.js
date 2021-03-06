// import all helpers
const helpersContext = require.context('../helpers', true)
helpersContext.keys().forEach(helpersContext)

// Polyfill fn.bind() for PhantomJS
/* eslint-disable no-extend-native */
Function.prototype.bind = require('function-bind')

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./', true, /\.spec$/)
testsContext.keys().forEach(testsContext)
