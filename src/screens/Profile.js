import React, { Component } from 'react';
import { StyleSheet, Alert, Image, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { Container, Drawer, Content, Header, Left, Body, Right, Button, Icon, Title, CardItem, Card, Thumbnail} from 'native-base';

class Profile extends Component {


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
          <Card style={{flex: 0}}>
            <CardItem header bordered>
              <Text style={styles.txttitle}>Profile</Text>
            </CardItem>
            <CardItem >
              <Left>
                  <Thumbnail circle large source={require('./assets/foto1.jpg')} />
                <Body>
                  <Text style={styles.txtname}>Melani P.U</Text>
                  <Text>melanlani@yahoo.com</Text>
                </Body>
              </Left>
              <Right>
                <Button style={{backgroundColor: '#f76710', width:50, height:40}}>
                  <Text style={styles.txtlogout}>Logout</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
              <Text style={styles.txtsubtitle}>Aktivitas Resep</Text>
            </CardItem>

            <CardItem >
              <Left>
                <Text style={styles.txtresep}>Nissin Ramen Shitake Damuza</Text>
              </Left>
              <Right>
                <Button transparent small style={styles.btnDelete}>
                  <Icon name="close" style={{color:'#f76710'}}/>
                </Button>
              </Right>
            </CardItem>
            <CardItem >
              <Left>
                <Text style={styles.txtresep}>Nissin Ramen Shitake Damuza(2)</Text>
              </Left>
              <Right>
                <Button transparent small style={styles.btnDelete}>
                  <Icon name="close" style={{color:'#f76710'}}/>
                </Button>
              </Right>
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
  txtname:{
    fontWeight: 'bold',
    fontSize: 16,
    color: '#062e56'
  },
  txttitle:{
    fontWeight: 'bold',
    fontSize: 20,
    color: '#f76710'
  },
  txtsubtitle:{
    fontWeight: 'bold',
    fontSize: 14,
    color: '#f76710'
  },
  txtresep:{
    fontWeight: 'bold',
    fontSize: 12,
  },
  btnDelete: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtlogout: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'white',
    marginLeft: 4
  }

});

export default Profile;
