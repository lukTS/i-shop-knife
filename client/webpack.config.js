const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      "assert": require.resolve("assert/"),
    "constants": require.resolve("constants-browserify"),
    "os": require.resolve("os-browserify/browser"),
    "querystring": require.resolve("querystring-es3"),
    "path": require.resolve("path-browserify"),
    "fs": false, // Модуль fs не имеет полифиллов для браузера
    "url": require.resolve("url/"),
    "crypto": require.resolve("crypto-browserify"),
    "stream": require.resolve("stream-browserify"),
    "http": require.resolve("stream-http"),
    "https": require.resolve("https-browserify"),
    "zlib": require.resolve("browserify-zlib"),
    "vm": require.resolve("vm-browserify"),
    "child_process": false, // Модуль child_process не имеет полифиллов для браузера
    "worker_threads": false, // Модуль worker_threads не имеет полифиллов для браузера
    "uglify-js": false, // Модуль uglify-js не имеет полифиллов для браузера
    "esbuild": false, // Модуль esbuild не имеет полифиллов для браузера
    "@swc/core": false, // Модуль @swc/core не имеет полифиллов для браузера
    "module": false, // Модуль module не имеет полифиллов для браузера
    }
  }
};
