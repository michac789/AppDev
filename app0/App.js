import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, 
  TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback,
  Button, Alert, Platform } from 'react-native';

export default function App() {
  console.log("executed")

  const handlePress = () => {
    console.log("text_pressed")
  }

  return (
    <SafeAreaView style={[styles.container, styles.bluecol]}>

      <Text>Open up App.js to start working on your app!</Text>
      <Text numberOfLines={2} onPress={handlePress}>
        HELLO REACT NATIVE !!! aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </Text>

      <TouchableOpacity onPress={() => console.log("image1 tapped")}>
        <Image source={require('./assets/favicon.png')}/>
      </TouchableOpacity>
      <TouchableHighlight onPress={() => console.log("image2 tapped")}>
        <Image source={{ 
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300",
          }}>
          </Image>
      </TouchableHighlight>
      <TouchableNativeFeedback>
        <View style={{ width: 200, height: 70, backgroundColor: "red" }}/>
      </TouchableNativeFeedback>

      <Button title="Click here" color="orange" onPress={() => alert("tapped")}/>
      <Button title="Prompt" color="magenta" onPress={() =>
        Alert.alert("Title", "Content", [
          {text: "yes", onPress: () => console.log("Yes")},
          {text: "no", onPress: () => console.log("No")},
        ])
      }/>
      <Button title="Prompt2" color="magenta" onPress={() =>
        Alert.prompt("Title", "Content", text => console.log(text))
      }/> 
      {/* only works in ios */}
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
  bluecol: {
    backgroundColor: "dodgerblue",
  }
});
