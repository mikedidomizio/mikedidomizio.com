# mikedidomizio.com

[![Build](https://github.com/mikedidomizio/mikedidomizio.com/actions/workflows/main.yml/badge.svg)](https://github.com/mikedidomizio/mikedidomizio.com/actions/workflows/main.yml/badge.svg)
[![codecov](https://codecov.io/gh/mikedidomizio/mikedidomizio.com/branch/master/graph/badge.svg?token=T9EZW2D26M)](https://codecov.io/gh/mikedidomizio/mikedidomizio.com)

## Description

Uses Vue to build the CV/website for mikedidomizio.com.

On merge to master, deploys to S3 via GitHub actions.

Has unit testing to ensure no unwanted changes are made to the project.

## Getting Started

### Requirements

- Node >= 10.18.1

```
$ yarn install (OR) npm install // install dependencies
$ yarn serve // which launches your browser to display a hot reload version of the CV
```

## Development

A lot of the building and testing is done with Docker.  Before pushing changes, run 
`./scripts/run-tests-for-coverage.sh mikedidomizio/mikedidomizio.com:latest` which will run the tests and generate 
new screenshots which will also need to be reviewed/committed for the build to pass.

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

## Testing

```
# Tests all the below test suites
yarn test

# Unit testing.  Unit testing of component logic
yarn test:unit

# Snapshot testing.  Tests DOM structure for unexpected changes
yarn test:snapshot

# Integration testing.  Tests UI functionality
yarn test:integration

# Visual regression testing.  Compares screenshots from previous ones to find inconsistencies
yarn test:visual

# PDF save testing.  For ensuring it follow a standard
yarn test:pdf
```
