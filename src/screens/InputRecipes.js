import React, { Component } from 'react';
import { StyleSheet, Alert, Image, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Container, Drawer, Content, Header, Left, Body, Right, Button, Icon, Title, CardItem, Card, Item, Input, Form, Textarea} from 'native-base';

class InputRecipes extends Component {
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
        <Header style={styles.header}>
            <Title style={{marginLeft:100, marginTop:13}}>Dapua Mandeh</Title>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
          </Right>
        </Header>
      <Content>
        <Card>
          <CardItem>
            <TouchableOpacity onPress={this.choosePicture} >
              <Icon name="camera" style={styles.iconPosition}/>
              <Text style={{marginLeft:100, marginTop:8}}>Ketuk untuk upload</Text>
            </TouchableOpacity>
          </CardItem>
        </Card>

        <Card>
          <CardItem>
            <Item rounded style={{height:40, width:318, backgroundColor:'#f5dbcc'}}>
              <Input placeholder='Judul Resep...'/>
            </Item>
          </CardItem>
            <Text style={{marginLeft:18, fontWeight:'bold', color:'#f76710'}}>Bahan-bahan</Text>
          <CardItem>
            <Form>
              <Textarea rowSpan={5} style={{height:80, width:320, backgroundColor:'#f5dbcc'}} bordered placeholder="Mis: 1 kg ayam" />
            </Form>
          </CardItem>
            <Text style={{marginLeft:18, fontWeight:'bold', color:'#f76710'}}>Langkah-langkah</Text>
          <CardItem>
            <Form>
              <Textarea rowSpan={5} style={{height:80, width:320, backgroundColor:'#f5dbcc'}} bordered placeholder="Mis: 1. Siapkan air mendidih " />
            </Form>
          </CardItem>
        </Card>

        <Card>
          <CardItem>
            <Button active style={styles.btnCart}
            onPress={() => {this.props.navigation.navigate("Home")}}>
              <Text style={styles.txtBtnCart}>Simpan Resep</Text>
            </Button>
          </CardItem>
        </Card>

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
  header: {
    backgroundColor: '#f76710',
  },
  iconPosition: {
    marginLeft:150,
    marginTop:13,
    color: "#f76710"
  },
  txtBtnCart: {
    left:120,
    color:'white'
  },
  btnCart: {
    width:321,
    backgroundColor:'#f76710'
  }

});

export default InputRecipes;
