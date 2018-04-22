This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

Below you'll find information about performing common tasks. 

## Installation Guide

1. Install [node.js](https://nodejs.org/dist/v8.11.1/node-v8.11.1-x64.msi)
2. Install [Visual Studio Code](https://code.visualstudio.com/download)
3. Install [git](https://git-scm.com/download/win)
4. Install expo on command prompt using this command `npm i -g expo` (Note: Make sure that node.js is already installed)
5. Install expo on command prompt using this command `npm i -g create-react-native-app` (Note: Make sure that node.js is already installed)

## Quick Start

1. Open file explorer and go to a folder where you want to download the code.
2. Press ``alt + D``, type ``cmd`` and hit `` Enter ``. This will open a comand prompt inside that folder.
3. Clone this repo using `git clone https://github.com/JeromeFranco/TrafficViolationMngt.git`.
4. Move to the appropriate directory: `cd TrafficViolationMngt`.<br />
5. Run `npm i` in order to install dependencies.<br />
6. Run the command below to configure Packager IP Address:
```
set REACT_NATIVE_PACKAGER_HOSTNAME=<your-ipv4-address-here>
```
Note: Replace ``<your-ipv4-address-here>`` with your IPv4 Address. You can see your IPv4 Address by opening command prompt and entering this command ``ipconfig``.<br />

7. Run ``npm start`` to run the app.
8. Scan QR code on your phone using the expo client app (You can download the app in Play Store) to lunch the app on your phone.

## Available Scripts

### `npm start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
npm start --reset-cache
```

## Customizing App Display Name and Icon

You can edit `app.json` to include [configuration keys](https://docs.expo.io/versions/latest/guides/configuration.html) under the `expo` key.

To change your app's display name, set the `expo.name` key in `app.json` to an appropriate string.

To set an app icon, set the `expo.icon` key in `app.json` to be either a local path or a URL. It's recommended that you use a 512x512 png file with transparency.
