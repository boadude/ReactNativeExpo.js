<p align="center">
  <a href="https://github.com/boadude/React-Native-Expo-Starter">
    <img  alt="React Native Expo Starter" src="https://raw.githubusercontent.com/boadude/React-Native-Expo-Starter/master/docs/react-native-expo-logo.png" class="img-responsive">
  </a>
</p>

---

[![GitHub version](https://badge.fury.io/gh/boadude%2FReact-Native-Expo-Starter.svg)](https://badge.fury.io/gh/boadude%2FReact-Native-Expo-Starter)
[![Dependency Status](https://david-dm.org/boadude/React-Native-Expo-Starter.svg)](https://david-dm.org/boadude/React-Native-Expo-Starter.svg)
[![Stack Share](http://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/boadude/react-native-expo-starter)

This repository will help you to start your fresh new React Native project with Expo using the best practices to accelerate you coding.

* Ready to build with Expo.
* NativeBase integration. Best UI Kit for React Native.
* Domain-Driven file structure.
* Best configurations for VSCode.
* Module Resolver for fixing Relative Paths.
* Best Linting configurations and complements.
* Ready to work with Prettier, Eslint integrations and best practices.
* Redux, Redux-thunk and Redux-persist for manage state.

![Module-Resolver](https://media.giphy.com/media/1o1uk9ls1BNrmNfVGa/giphy.gif)

# Table of contents

* [Instalation](#instalation)
* [Configuration](#configuration)
  * [Visual Studio Code](#visual-studio-code)
  * [Add-ons](#add-ons)
  * [Optionals](#optionals)
* [File Structure](#file-structure)
* [Support](#support)
* [Maintainers](#maintainers)
* [License](#license)

# Instalation

> Clone or download the repository and install the dependencies

```bash
# Clone the repository
git clone --depth 1 https://github.com/boadude/React-Native-Expo-Starter.git

# Go to React-Native-Expo-Starter directory
cd React-Native-Expo-Starter

# Install dependecies
npm install

# Start the project with Expo
npm start
```

Now, open Expo app on your Android or iPhone phone and scan the QR Code or go to the exp url. If you want you can start a device simulator, just follow the instructions in your console.

<img  alt="Expo starter" src="https://raw.githubusercontent.com/boadude/React-Native-Expo-Starter/master/docs/expo-console.png" class="img-responsive">

# Configuration

To ensure our work, we use [Visual Studio Code](https://code.visualstudio.com/) and a few addons that will make our work much cleaner and professional.

## Visual Studio Code

Just go to [Visual Studio Code](https://code.visualstudio.com/) webpage and download. Follow the installation instruction and that its.

## Add-ons

To install the add-ons necessary to work faster and cleaner we must go to the extension icon on the left panel and search all the add-on and installed.

* [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag) : Automatically close tags.
* [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) : Spell checker that works well with camelCase code.
* [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) : Integrates ESLint into VSCode, to check in coding time the mistakes.
* [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) : For autocompletation filenames.
* [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) : Best code formater ever.

## Optionals

* [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme) : Icons for folders and files.
* [NPM](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script) : For validations of installed modules.

# File Structure

The repository use the [Domain-Driven File Structure](https://medium.com/@hassan.djirdeh/domain-driven-react-redux-a474ecf7d126).

```
react-native-expo-starter/
 ├──.expo/                         * configuration for expo
 ├──.vscode/                       * configuration for vscode ide
 │   └──settings.json              * configurations for vscode and path intellisense
 ├──docs/                          * images for the repository (you can delete this folder)
 ├──src/                           * source files
 │   │
 │   ├──app/                       * app configurations
 │   │   ├──reducers.js            * configurations for the reducers
 │   │   └──store.js               * configurations for the store
 │   │
 │   ├──assets/                    * static assets
 │   │   ├──fonts/                 * customs fonts
 │   │   ├──images/                * images
 │   │   └──native-base-theme/     * nativebase theme for custom configurations
 │   │
 │   ├──common/                    * common components
 │   │
 │   ├──components/                * components source
 │   │   ├──dashboard/             * dashboard component
 │   │   ├──loading/               * loading component
 │   │   └──login/                 * login component
 │   │      ├──Login.js            * login container
 │   │      ├──LoginActions.js     * login actions
 │   │      ├──LoginReducers.js    * login reducers
 │   │      └──LoginStyles.js      * login styles
 │   │
 │   └──constants/                 * constants and customs
 │       ├──constants.js           * global constants
 │       └──errors.js              * custom errors messages
 │
 │
 ├──.babelrc                       * configuration for module-resolver and babel
 ├──.editorconfig                  * configuration for vscode
 ├──.eslintrc                      * configuration for eslint
 ├──.flowconfig                    * configuration for flow
 ├──App.js                         * initial configuration for start the project
 ├──app.json                       * configuration por expo
 ├──jsconfig.json                  * configuration for compiler
 └──package.json                   * what npm uses to manage its dependencies
```

# Support

> Contact me anytime if you need help

* [Twitter: @boadude](https://twitter.com/boadude)

# License

The MIT License (MIT)

Copyright (c) 2018 Miguel Meza, CIMADent

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
