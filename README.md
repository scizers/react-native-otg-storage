
# react-native-otg-storage

## Getting started

`$ npm install react-native-otg-storage --save`

### Mostly automatic installation

`$ react-native link react-native-otg-storage`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-otg-storage` and add `RNOtgStorage.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNOtgStorage.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNOtgStoragePackage;` to the imports at the top of the file
  - Add `new RNOtgStoragePackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-otg-storage'
  	project(':react-native-otg-storage').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-otg-storage/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-otg-storage')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNOtgStorage.sln` in `node_modules/react-native-otg-storage/windows/RNOtgStorage.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Otg.Storage.RNOtgStorage;` to the usings at the top of the file
  - Add `new RNOtgStoragePackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNOtgStorage from 'react-native-otg-storage';

// TODO: What to do with the module?
RNOtgStorage;
```
  