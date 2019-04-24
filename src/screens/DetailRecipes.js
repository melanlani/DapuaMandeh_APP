import React, { Component } from 'react';
import { StyleSheet, Alert, Image, Text, View, FlatList } from 'react-native';
import { Container, Drawer, Content, Header, Left, Body, Right, Button, Icon, Title, CardItem, Card, Spinner, Thumbnail } from 'native-base';

class DetailRecipes extends Component {


  render() {

    return (

      <Container>
        <Content>
          <Card>
            <CardItem cardBody>
              <Image source={require('./assets/resep1.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Text style={styles.txttitle}>Nissin Ramen Shitake Damuza</Text>
              </Left>
              <Right>
                <Thumbnail circle small source={require('./assets/foto1.jpg')} />
                  <Text style={styles.txtuser}>Melani P.U</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
              <Left>
                <Text style={styles.txtbagan}>Bahan-bahan</Text>
              </Left>
              <Right>
                <Text note style={styles.txtuser}>1 porsi</Text>
              </Right>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build
                  high-quality mobile apps using React Native iOS and Android
                  apps
                  with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
              <Text style={styles.txtbagan}>Langkah-langkah</Text>
            </CardItem>

            <CardItem bordered>
                <Text>A base component for specifying lists of information. List must contain one or more list elements.
                Props provide configurability for several features.</Text>
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
  txttitle:{
    fontWeight: 'bold',
    fontSize: 16,
    color: '#062e56'
  },
  txtbagan: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#f76710'
  },
  txtuser: {
    fontSize: 11
  }

});

export default DetailRecipes;
