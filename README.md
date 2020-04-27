<p align="center">
    <img src="https://codingandfitness.s3.amazonaws.com/images/reactnativeexpo-v2.png"><br>
    An React Native Starter Kit with Expo + NativeBase + Best configuration for VSCode IDE.
</p>

<p align="center">
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/codingandfitness/ReactNativeExpo.js) [![Stack Share](https://img.shields.io/badge/StackShare-ReactNativeExpo.js-blue.svg)](https://stackshare.io/codingandfitness/reactnativeexpo-js) [![GitHub license](https://img.shields.io/github/license/codingandfitness/ReactNativeExpo.js)](https://github.com/codingandfitness/ReactNativeExpo.js) ![GitHub last commit](https://img.shields.io/github/last-commit/codingandfitness/ReactNativeExpo.js) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/codingandfitness/ReactNativeExpo.js)
</p>

---

# Breaking Changes in v2:

With the new releases from React Native and Expo, I need to update the project for continuous working. Version 1 is not working anymore and is replaced by version 2.
If you want to know how to update version 1 to version 2, you can read it here in a post:

[Updating ReactNativeExpo.js v1 to v2](https://dev.to/codingandfitness/updating-reactnativeexpo-js-v1-to-v2-40nc)

---

<a href="https://www.buymeacoffee.com/ur4EkB5" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/arial-blue.png" alt="Buy Me A Coffee" style="height: 25px !important;width: 108px !important;" ></a>

This repository will help you to start your fresh new React Native project with Expo using the best practices to accelerate your coding.

- Ready to build with Expo.
- NativeBase integration. Best UI Kit for React Native.
- Domain-Driven file structure.
- Best configurations for VSCode.
- Module Resolver for fixing Relative Paths.
- Best Linting settings and complements.
- Ready to work with Prettier, Eslint integrations, and best practices.
- Redux, Redux-thunk, and Redux-persist for manage state.

## Table of contents

- [Installation](#instalation)
- [Configuration](#configuration)
  - [Visual Studio Code](#visual-studio-code)
  - [Add-ons](#add-ons)
  - [Optional](#optionals)
- [File Structure](#file-structure)

## Installation

Clone or download the repository and install the dependencies

    # Clone the repository
    git clone --depth 1 <https://github.com/boadude/React-Native-Expo-Starter.git>

    # Go to React-Native-Expo-Starter directory
    cd React-Native-Expo-Starter

    # Install dependencies
    npm install

    # Start the project with Expo
    npm start

Now, open Expo app on your Android or iPhone phone and scan the QR Code or go to the exp url. If you want, you can start a device simulator, follow the instructions in your console.

## Configuration

To ensure our work, we use Visual Studio Code and a few add-ons that will make our job much cleaner and professional.

### Visual Studio Code

Just go to Visual Studio Code webpage and download. Follow the installation instruction and that its.

### Add-ons

To install the add-ons necessary to work faster and cleaner, we must go to the extension icon on the left panel and search all the add-on and installed.

- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag): Automatically close tags.
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker): Spell-checker that works well with camelCase code.
- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): Integrates ESLint into VSCode, to check-in coding time the mistakes.
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense): For autocompletion filenames.
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): Best code formatter ever.

### Optional

- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme): Icons for folders and files.
- [NPM](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script): For validations of installed modules.

## File Structure

The repository uses the [Domain-Driven File Structure](https://medium.com/@hassan.djirdeh/domain-driven-react-redux-a474ecf7d126).

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
     ├──.editorconfig                  * configuration for vscode
     ├──.eslintrc                      * configuration for eslint
     ├──.flowconfig                    * configuration for flow
     ├──babel.config.js                * configuration for module-resolver and babel
     ├──App.js                         * initial configuration for start the project
     ├──app.json                       * configuration por expo
     ├──index.js                       * expo starter
     ├──jsconfig.json                  * configuration for compiler
     └──package.json                   * what npm uses to manage its dependencies

## Troubleshooting

### Running iOS React Native

If you want to open the app on React Native, you can do it running:

    npm run ios

Must be aware, if you are using Mac must install CocoaPods and run the installation process in the folder '/ios'

    sudo gem install cocoapods
    pod install

### Native-base LTS

The project uses Native-base for developing UI. The latest version to date has a problem with a Font that uses and can't found in the dependency '@expo/vector-icons'.

    /Users/boamacbookpro/Projects/reactNativeStarter/node_modules/native-base/dist/src/basic/IconNB.js
    Module not found: Can't resolve '@expo/vector-icons/Fontisto' in '/Users/boamacbookpro/Projects/reactNativeStarter/node_modules/native-base/dist/src/basic'

For the moment, the only way to fix this is by installing version 2.13.8.

    npm i -S native-base@2.13.8

### Update Native-base

If you want to update Native-base to the newest version, you must follow the next steps:

    # Extract the 'native-base-theme' in the root of the project
    node node_modules/native-base/ejectTheme.js

    # Replace 'src/assets/native-base-theme'for the newly copy 'native-base-theme' in the root folder
