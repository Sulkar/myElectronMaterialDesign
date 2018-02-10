# myElectronMaterialDesign

![Image of Electron APP](/images/intro.png)

**Clone and run for a quick way to setup [Electron](https://electronjs.org/docs) + [Material Design](https://material.io/components/web/catalog/) + [Material Design Icons](https://material.io/icons/) + [NeDB](https://github.com/louischatriot/nedb)**

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:
:boom: ALERT: it will download all the Material Design Icons for offline use (60mb) :boom:

```bash
# Clone this repository
git clone https://github.com/Sulkar/myElectronMaterialDesign
# Go into the repository
cd myElectronMaterialDesign
# Install dependencies
npm install
# Run the app
npm start
```

## build your electron apps
For building the app we use the "electron-builder" module. Create an icon for your app and store it in the ./build folder (size must be 256x256 or higher). To build your final app run:
```bash
# Go into the repository
cd myElectronMaterialDesign
# Run electron-builder
npm run dist
```

## Resources for Learning

- [electron.atom.io/docs](http://electron.atom.io/docs) - all of Electron's documentation
- [electron.atom.io/community/#boilerplates](http://electron.atom.io/community/#boilerplates) - sample starter apps created by the community
- [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - a very basic starter Electron app
- [electron/simple-samples](https://github.com/electron/simple-samples) - small applications with ideas for taking them further
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - an Electron app that teaches you how to use Electron
- [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - small demo apps for the various Electron APIs
- ...
