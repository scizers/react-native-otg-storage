
import { NativeModules } from 'react-native';

const { RNOtgStorage } = NativeModules;

 export default RNOtgStorage;
// export class UsbStorage {
//     constructor() {
//         if (Platform.OS != 'android') {
//             throw 'Unfortunately only android is supported';
//         }
//     }

//     testing() {
//         return RNOtgStorage.testing();
//     }
// }
