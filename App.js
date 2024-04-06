import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from "react"
import { StyleSheet, Text, View, Button, Link } from 'react-native';
import { BarCodeScanner } from './node_modules/expo-barcode-scanner';


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
    <View style={styles.container}>
      {/* <View style={styles.barcodebox}>
        
      </View> */}
      <Text>Open up App.js to start working on your app!</Text>
      <Text>hello vikash</Text>
      <StatusBar style="auto" />
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
