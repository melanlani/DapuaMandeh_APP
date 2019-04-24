import React, { Component } from 'react';
import { StyleSheet, Alert, Image, Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Container, Thumbnail, Drawer, Content, Header, Left, Body, Icon, Right, Button, Title, CardItem, Card} from 'native-base';
class Home extends Component {


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
            <Image source={require('./assets/images.jpg')} style={styles.banner}/>
          </Card>

          <Card>
            <CardItem>
            <Text style={{fontWeight: 'bold'}}>Resep Terbaru</Text>
            </CardItem>
          </Card>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('DetailRecipes')}}>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail circle source={require('./assets/foto1.jpg')} />
                <Body>
                  <Text>Melani Putri U</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('./assets/resep1.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
            <Text style={styles.txttitle}>Nissin Ramen Shitake Damuza</Text>
            </CardItem>
            <CardItem>
            <Text >Nissin Ramen Shitake Damuza adalah ramen yang dimasak dengan cita rasa pedas asin dengan aroma khas jahe...</Text>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
          </TouchableOpacity>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail circle source={require('./assets/foto.jpg')} />
                <Body>
                  <Text>Rina Rani</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('./assets/resep2.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
            <Text style={styles.txttitle}>Pecel ayam ala ala mama</Text>
            </CardItem>
            <CardItem>
              <Text>Pecel ayam ala ala mama adalah masakan yang dibuat dengan sepenuh hati dimana ayamnya direbus dalam...</Text>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>20 Likes</Text>
                </Button>
              </Left>
              <Body>
              </Body>
              <Right>
                <Text>11h ago</Text>
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
  banner: {
    height: 170 ,
    width: 355
  },
  txttitle:{
    fontWeight: 'bold',
    fontSize: 16,
    color: '#062e56'
  },

});

export default Home;
