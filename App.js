import { StatusBar } from 'expo-status-bar';
import { AppRegistry, View, Image, StyleSheet, Text, Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Birthday Card</Text>
      <View style={styles.container1}>
        <Image style={styles.pic} source={{uri: 'https://www.bing.com/th?id=OIP.kyPwHypm01Sjwt56TiLPNwHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'}}
        /> 
        <Text style={styles.msg}>To: Chester Hlungwani.</Text>
        <Text style={styles.msg1}>“Today is the day you were brought into this world to be<br></br> a blessing and inspiration to the people around you!<br></br> I'm not
        sure what you learned this year, but every<br></br>experience transforms us into the people we are today.<br></br> <br></br> You are a wonderful person! May you 
        be given more<br></br> birthdays to fulfill all of your dreams!”<br></br><br></br> Happy birthday!</Text> 
      </View>
     {/* <View style={styles.container1}>
       
       <Image style={styles.pic}
          source={{uri: 'https://www.bing.com/th?id=OIP.kyPwHypm01Sjwt56TiLPNwHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'}}
        /> 
      </View>  */}
    </View>
    
  );
}
const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#ddcc58',
  },
  title: {
    textAlign: 'center',
    textTransform: "uppercase",
    fontSize: 54,
    fontFamily: 'f',
  },
  container1: {
    borderRadius: 20,
    alignItems: 'center',
    width: 1100,
    padding: 20,
    top: 50,
    marginHorizontal: 400,
    backgroundColor: 'red',
  },
  msg: {
    textAlign: 'unset',
    fontFamily: 'f',
    textTransform: "uppercase",
    fontSize: 26,
    padding: 15,
    top: 15,
    right: 170,
    position: 'absolute',
  },
  msg1: {
    display: 'flex',
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 20,
    paddingTop: 30,
    top: 42,
    right: 30,
    position: 'absolute',
  },
  pic: {
    position: 'relative',
    left: -280,
    width: 520,
    height: 460,
    borderRadius: 15,
  },
});
