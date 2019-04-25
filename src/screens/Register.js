import React, { Component } from 'react';
import { StyleSheet, Alert, Image, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { Container, Drawer, Content, Header, Left, Body, Right, Button, Icon, Title, CardItem, Card, Item, Input, Thumbnail} from 'native-base';

class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      srcImg: '',
      uri: '',
      fileName: '',
      loading: false
    }
  }

  choosePicture = () => {
    var ImagePicker = require('react-native-image-picker');
    var options = {
      title: 'Pilih Gambar',
      storageOptions: {
      skipBackup: true,
      path: 'images'
      }
    }
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response =', response);
      if(response.didCancel){
        console.log('User cancelled image picker');
      }
      else if(response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
          console.log('User tapped custom button:', response.customButton);
      }
      else{
      console.log(response.fileName);
        this.setState({
          srcImg: {uri:response.uri},
          uri: response.uri,
          fileName: response.fileName
        })
      }
    })
  }

  render() {

    return (

      <Container>
        <Content>

          <Item style={styles.sizeItem}>
            <Input placeholder="Email"/>
          </Item>
          <Item style={styles.sizeItem}>
            <Input placeholder="Username"/>
          </Item>
          <Item style={styles.sizeItem}>
            <Input placeholder="Password" secureTextEntry={true}/>
          </Item>
          <CardItem>
          <Item style={styles.sizeItemm}>
            <Left>
            {(this.state.srcImg!='') ? (
              <Thumbnail square large source={this.state.srcImg} />
            ):(
              <Button style={styles.btnUpload} onPress={this.choosePicture} >
                <Text style={styles.txtUpload}>Upload Foto</Text>
              </Button>
            )}
            </Left>
          </Item >
          </CardItem>
          <Button style={styles.btnLogin} onPress={() => {this.props.navigation.navigate('ButtomNav')}}>
            <Text style={styles.txtlogin}>Daftar</Text>
          </Button>
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
  sizeItem: {
    marginTop: 20,
    marginLeft: 20,
    width:320
  },
  sizeItemm: {
    marginTop: 20,
    marginLeft: 6,
    width:320
  },
  txtlabel: {
    fontSize:16,
    color: '#4c4646',
    marginBottom: 10
  },
  btnUpload: {
    width:100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    marginBottom: 20
  },
  txtUpload: {
    fontWeight: 'bold',
    fontSize: 12,
    color: 'white',
    marginLeft: 4
  },
  txtFoto: {
    marginLeft: 20,
    marginTop: 20,
  }

});

export default Register;
