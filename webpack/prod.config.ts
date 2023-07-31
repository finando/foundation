import { resolve } from 'path';

import TerserPlugin from 'terser-webpack-plugin';
import { type Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import base from './base.config';

const prod: Configuration = merge<Configuration>(base, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          format: {
            comments: false,
          },
        },
      }),
    ],
  },
});

const umd: Configuration = merge<Configuration>(prod, {
  output: {
    clean: true,
    path: resolve('lib/umd'),
    filename: 'index.js',
    library: {
      type: 'umd',
    },
  },
  externalsType: 'umd',
});

const mjs: Configuration = merge<Configuration>(prod, {
  output: {
    clean: true,
    path: resolve('lib/mjs'),
    filename: 'index.mjs',
    library: {
      type: 'module',
    },
    module: true,
  },
  externalsType: 'module',
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
  externalsType: 'commonjs',
});

export default [umd, mjs, cjs];
