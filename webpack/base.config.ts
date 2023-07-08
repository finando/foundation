import { resolve } from 'path';

import { type Configuration } from 'webpack';
import nodeExternals from 'webpack-node-externals';

const configuration: Configuration = {
  entry: ['./src/index.ts'],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  externals: [
    nodeExternals({
      modulesFromFile: {
        include: ['dependencies', 'peerDependencies'],
      },
    }),
  ],
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
