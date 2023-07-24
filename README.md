# Finando | Foundation

A collection of reusable building blocks.

[![GitHub Actions](https://github.com/finando/foundation/actions/workflows/check.yaml/badge.svg)](https://github.com/finando/foundation/actions/workflows/check.yaml)
[![GitHub Actions](https://github.com/finando/foundation/actions/workflows/release.yaml/badge.svg)](https://github.com/finando/foundation/actions/workflows/release.yaml)

## Table of Contents

  - [Usage](#usage)
  - [Contributing](#contributing)
    - [Development environment](#development-environment)
    - [Implementing changes](#implementing-changes)
    - [Releasing new versions](#releasing-new-versions)
  - [Change log](#change-log)

## Usage

Please refer to the respective package configuration for more information:
  - [interfaces](https://github.com/finando/foundation/blob/HEAD/src/packages/interfaces/README.md)
  - [components](https://github.com/finando/foundation/blob/HEAD/src/packages/components/README.md)
  - [utils](https://github.com/finando/foundation/blob/HEAD/src/packages/utils/README.md)

## Contributing

### Development environment

The project is structured as a monorepo and is managed by [Lerna](https://lerna.js.org/) in conjunction with [NPM workspaces](https://docs.npmjs.com/cli/v9/using-npm/workspaces?v=true).

Follow the outlined steps in order to set up a development environment.

#### Step 1 - Install dependencies
```sh
npm install
```

#### Step 2 - Run preparation script
```sh
npm run prepare
```

#### Step 3 - Build leaf packages
```sh
npx lerna run build
```

#### Step 4 - Start development environment with Storybook
```sh
npm start
```

### Implementing changes

In order to implement changes, create a branch from `master` branch, commit changes and open a pull request. Use [atomic](https://en.wikipedia.org/wiki/Atomic_commit) [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) to add changes to Git history. Use `npm run commit` to start an interactive wizard that helps with formatting commits according to specified standard.

### Releasing new versions

Once changes are approved by pull request reviewers, merge the pull request to `master` branch. This will trigger an automatic release workflow in GitHub Actions. Follow along to make sure it completes successfully.

## Change logs

Detailed change logs for each package are documented in resepctive CHANGELOG.md files:
 - [interfaces](https://github.com/finando/foundation/blob/HEAD/src/packages/interfaces/CHANGELOG.md)
 - [components](https://github.com/finando/foundation/blob/HEAD/src/packages/components/CHANGELOG.md)
 - [utils](https://github.com/finando/foundation/blob/HEAD/src/packages/utils/CHANGELOG.md)
