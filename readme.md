# 🎃 My Orange Wallet

> myorange wallet is a multichain non-custodial wallet

## Setup

### General

- Install NVM or Node.js 14: https://github.com/creationix/nvm
- Install all project dependencies with `yarn setup`

### MacOS

1. Install the [latest version of XCode](https://developer.apple.com/xcode/).

2. Install Watchman:

   ```shell
   brew install watchman
   ```

3. Install CocoaPods:

   ```shell
   sudo gem install cocoapods
   ```

4. Install the required Pods for this project:
   ```shell
    yarn install-pods
   ```

### Linux

1. Install system dependencies:

   ```shell
   sudo apt install libsecret-tools watchman
   ```

2. Follow the [React Native environment setup
   instructions](https://reactnative.dev/docs/environment-setup) carefully,
   which will involve installing Android Studio, the Android SDK, the emulator,
   etc. and making them available in your `$PATH`.

3. Ensure at least one [AVD
   image](https://developer.android.com/studio/run/managing-avds) is available
   for the emulator (unless using a physical device).

## Developing

If you are new to React Native, this is a helpful introduction:
https://reactnative.dev/docs/getting-started

### Preflight

1. Run `nvm use 14` to force Node.js v14.

2. Set up your .env file, use our env.example as a guide.

   Here are some resources to generate your own API keys:

   - Etherscan: https://etherscan.io/apis
   - Bscscan: https://bscscan.com/apis
   - Infura: https://infura.io/
   - ETH Gas Station: https://docs.ethgasstation.info/
   - BSC Gas Station: https://bscscan.com/gastracker
   - Imgix: https://www.imgix.com/


### MacOS

_Note: Darwin versions of the application can only be developed/built on Darwin
platforms with XCode._

1. Start a React Native webserver with:

   ```shell
   yarn start
   ```

2. Open `myorange/ios/myorange.xcworkspace` in XCode.

3. Run the project by clicking the play button.

### Linux

_Note: Linux development environments cannot develop or build Darwin versions of the
project._

1. Start a React Native webserver with:

   ```shell
   yarn start
   ```

2. Build/install/start the debug version of the app in an emulator with:
   ```shell
   yarn android
   ```
