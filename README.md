# eslint-config-standards

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Features

- with prettier support, thanks to [eslint-plugin-prettier](prettier.io/docs/en/eslint.html#use-eslint-to-run-prettier)

## Installation

The default export contains all default Airbnb ESLint rules, including
ECMAScript 6+, and the ones listed below. It requires some peerDependencies as
well.

Install the package with

```sh
npm install eslint-config-standards --save-dev

# or
yarn add eslint-config-standards -D
```

Then install the correct versions of each peerDependency package, which are
listed by the command:

```sh
npm info "eslint-config-standards@latest" peerDependencies
```

If using npm 5+, use this shortcut:

```sh
npx install-peerdeps --dev eslint-config-standards

# or
yarn add eslint-config-standards -D --peer
```

## Usage

Now add the config to either your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "eslint-config-standards"
  }
}
```

to your `.eslintrc`:

```json
{
  "extends": "eslint-config-standards"
}
```

or `.eslintrc.js`:

```js
module.exports = {
  extends: 'eslint-config-standards',
}
```

## Assumptions

This ESLint configuration comes with some fundamental assumptions:

- browser and/or node environment
- parser: babel (used babel-eslint parser)

## LICENCE

[MIT](LICENCE)

## Maintainers

<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center">
        <a href="https://github.com/alexgonrod">
          <img width="150" height="150" src="https://github.com/alexgonrod.png?v=3&s=150">
          </br>
          Alex Gonzalez
        </a>
        <div>
          <a href="https://twitter.com/deepinsd">
            <img src="https://img.shields.io/twitter/follow/deepinsd.svg?style=social&label=Follow" />
          </a>
        </div>
      </td>
    </tr>
  <tbody>
</table>
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
