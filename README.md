
# react-native-otg-storage

## Getting started

`$ npm install react-native-otg-storage --save`

### Mostly automatic installation

`$ react-native link react-native-otg-storage`

### Manual installation


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


#### Important 
The library can be included into your project like this:

```ruby
compile 'com.github.mjdev:libaums:0.5.5'
```


## Usage
```javascript
import RNOtgStorage from 'react-native-otg-storage';
import {DeviceEventEmitter} from 'react-native';


	constructor(props) {
		super(props);
		DeviceEventEmitter.addListener('onOTGConnected', (event) => {
			console.log(event, 'onOTGConnected');
		});

		DeviceEventEmitter.addListener('onOTGDisconnected', (event) => {
			console.log(event, 'onOTGDisconnected');
		});


		DeviceEventEmitter.addListener('logger', (event) => {
			console.log(event);
		});


		DeviceEventEmitter.addListener('newDeviceConnected', (event) => {
			console.log(event);
		});
	}


	connectDevice() {

		RNOtgStorage.connectDevice().then((d)=> {
			console.log(d)
		});

	}

	openDevice() {

		RNOtgStorage.openDevice().then((d)=> {

			RNOtgStorage.openRootFolder("foo", function (data) {
				console.log(data);

				RNOtgStorage.openRootFolderFile("foo", "bar.txt", function (x) {

					console.log(x);

					RNOtgStorage.udpateOrCreateRootFolderFile("foo", "barsdf.txt", "sadf asdf jasdfk asf" , function (r) {
						console.log(r);
					})


				})

			})

		});

	}


```
  