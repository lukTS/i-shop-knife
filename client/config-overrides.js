const path = require('path');

module.exports = function override(config, env) {
  config.resolve.fallback = {
    "assert": require.resolve("assert/"),
    "constants": require.resolve("constants-browserify"),
    "os": require.resolve("os-browserify/browser"),
    "querystring": require.resolve("querystring-es3"),
    "path": require.resolve("path-browserify"),
    "fs": false,
    "url": require.resolve("url/"),
    "crypto": require.resolve("crypto-browserify"),
    "stream": require.resolve("stream-browserify"),
    "http": require.resolve("stream-http"),
    "https": require.resolve("https-browserify"),
    "zlib": require.resolve("browserify-zlib"),
    "vm": require.resolve("vm-browserify"),
    "child_process": false,
    "worker_threads": false,
    "uglify-js": false,
    "esbuild": false,
    "@swc/core": false,
    "module": false,
    "inspector": false
  };

  return config;
};
