import IPModule from 'react-native-test-module/IPModule';
import { Platform } from 'react-native';


const fetchIp = async () => {
  if(Platform.OS){
    const ip = await IPModule.getIP();
    return ip
  } else {
    return 'Not support'
  }
}

export default fetchIp

