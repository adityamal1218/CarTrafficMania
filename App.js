import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from "react"
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Link } from 'react-native';
import { BarCodeScanner } from './node_modules/expo-barcode-scanner';
import Home from './src/Home'


export default function App() {
  const [permission , setPermission] = useState(null)
  const [scanned, setScanned] = useState(false);
  const [text,setText] = useState("NOt Scanned")

  const askForCamera=()=>{
    (async () => {
      const {status} = await BarCodeScanner.requestPermissionsAsync();
      setPermission(status == 'granted')
    })()
  }

  useEffect(() => {
  askForCamera();

  },[]);

  const handleBarCode = ({type, data}) => {
    setScanned(true);
    setText(data);
    console.log("Type: "+type+"\nData:"+data);
  }
  if(permission === null){
    return(
      <View style={styles.container}>
      <Text>Allow TO access camera</Text>
      </View>
    )
  }
  if(permission === false){
    return(
      <View style={styles.container}>
      <Text>Camera not found</Text>
      <Button title='AlloW Camera' onPress={()=>askForCamera()}/>
      </View>
    )
  }
  
  return (
    // <View style={styles.container}>
    //   {/* <View style={styles.barcodebox}>
        
    //   </View> */}
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <Text>hello sir hiiii </Text>
    //   <Home/>
    //   <StatusBar style="auto" />
    // </View>
    <View className='flex-1 justify-center items-center bg-white'>
    <StatusBar style='auto' />
    <Text className='text-center mt-3 text-2xl font-light text-orange-300'>
      Login
    </Text>
    {/* Additional components goes here */}
    <View className='mt-5 mx-5'>
      <View>
        <Text className='text-gray-400'>EMAIL:</Text>
        <TextInput
          placeholder='Enter Email...'
          className='border border-dotted p-2 text-gray-500 border-amber-400 mt-1'
        />
      </View>
      <View className='mt-3'>
        <Text className='text-gray-400'>PASSWORD:</Text>
        <TextInput
          secureTextEntry
          placeholder='Enter Password...'
          className='border text-gray-500 border-dotted p-2 border-amber-400 mt-1'
        />
      </View>

      <TouchableOpacity className='bg-orange-300 p-3 mt-4'>
        <Text className='text-center text-base text-white'>Login</Text>
      </TouchableOpacity>

      <Text className='text-center font-normal text-gray-500 text-base mt-3'>
        OR
      </Text>
      <View className='mt-4'>
        <TouchableOpacity className='flex flex-row items-center justify-center p-2 bg-orange-300'>
          <Text className='text-white mx-2 text-sm'>Sign In With Google</Text>
        </TouchableOpacity>
      </View>
      <View className='mt-6 flex-row justify-center'>
        <Text className=''>New to FreeCodeCamp? </Text>
        <TouchableOpacity>
          <Text className='text-amber-500'>Create an Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // barcodebox: {
  //   backgroundColor: 'tomato',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   height: '320',
  //   width: '320',
  //   overflow: 'hidden',
  //   borderRadius: '30',
  // },
  maintext:{
    fontSize:'16',
    margin: '20'
  }
});
