import React, { Component } from 'react';
import { StyleSheet, Alert, Image, Text, View, FlatList, ActivityIndicator,TouchableOpacity } from 'react-native';
import { Container, Drawer, Content, Header, Left, Body, Right, Button, Icon, Title, CardItem, Card, Item, Input} from 'native-base';

class Login extends Component {


  render() {

    return (

      <Container>
        <Content>
          <Image source={require('./assets/images.jpg')} style={styles.banner}/>
          <Item style={styles.sizeItem}>
            <Input placeholder="Email"/>
          </Item>
          <Item style={styles.sizeItem}>
            <Input placeholder="Password" secureTextEntry={true}/>
          </Item>
          <Button style={styles.btnLogin} onPress={() => {this.props.navigation.navigate('ButtomNav')}}>
            <Text style={styles.txtlogin}>Login</Text>
          </Button>
          <CardItem>
            <Left>
            </Left>
            <Right>
              <TouchableOpacity onPress={() => {this.props.navigation.navigate('Register')}}>
                <Text style={styles.txtdaftar}>Buat Akun</Text>
              </TouchableOpacity >
            </Right>
          </CardItem>
        </Content>
      </Container>

    );

  }
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  banner: {
    height: 80,
    width: 85,
    marginTop: 90,
    marginLeft: 140
  },
  sizeItem: {
    marginTop: 20,
    marginLeft: 20,
    width:320
  },
  btnDaftar: {
    width: 75,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f76710',
    marginLeft: 40,
    marginTop: 20
  },
  btnLogin: {
    width:321,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f76710',
    marginTop: 20,
    marginLeft: 20
  },
  txtlogin: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    marginLeft: 4
  },
  txtdaftar: {
    fontSize: 14,
    color: '#f76710'
  }

});

export default Login;
