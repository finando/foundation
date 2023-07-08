import { resolve } from 'path';

import { type Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import base from './base.config';

const prod: Configuration = merge<Configuration>(base, {
  mode: 'production',
  devtool: 'source-map',
});

const mjs: Configuration = merge<Configuration>(prod, {
  output: {
    clean: true,
    path: resolve('lib/mjs'),
    filename: 'index.mjs',
    library: {
      type: 'module',
    },
  },
  experiments: {
    outputModule: true,
  },
});

const cjs: Configuration = merge<Configuration>(prod, {
  output: {
    clean: true,
    path: resolve('lib/cjs'),
    filename: 'index.cjs',
    library: {
      type: 'commonjs',
    },
  },
});

export default [mjs, cjs];
