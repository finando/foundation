import { resolve } from 'path';

import { type Configuration } from 'webpack';

import { externalDependencies } from './utils';

const configuration: Configuration = {
  entry: ['./src/index.ts'],
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  externals: [...externalDependencies()],
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: resolve(__dirname, '../.babelrc.json'),
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
};

export default configuration;
