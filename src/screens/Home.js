import React, { Component } from 'react';
import { StyleSheet, Alert, Image, Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Container, Thumbnail, Drawer, Content, Header, Left, Body, Icon, Right, Button, Title, CardItem, Card} from 'native-base';
import { connect } from 'react-redux';
import { getRecipe } from '../redux/actions/recipes';
class Home extends Component {

  componentDidMount(){
    this.props.getRecipeDispatch()
  }

  render() {
    const { recipes, pending } = this.props;
    if (pending) {
      return(
        <View style={styles.viewPending}>
          <ActivityIndicator color="#E91E63" size="large"  />
        </View>
      )
    }
    else {
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
          <FlatList
            data={recipes}
            renderItem={({item}) =>(
              <TouchableOpacity onPress={() => {this.props.navigation.navigate('DetailRecipes')}}>
              <Card>
                <CardItem>
                  <Left>
                    <Thumbnail circle source={{uri:item.foto}} />
                    <Body>
                      <Text>{item.username}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image source={{uri: item.foto_resep}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                <Text style={styles.txttitle}>{item.judul}</Text>
                </CardItem>
                <CardItem>
                <Text >{item.bahan}</Text>
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
            )}
          keyExtractor={(item, index) => index.toString()}
          />

        </Content>
      </Container>

      );
    }
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
  viewPending: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#E91E63'
  },

});


  const mapStateToProps = state => ({
    recipes : state.recipes.recipes,
    user: state.accounts.user
  })

  const mapDispatchToProps = dispatch => {
    return {
      getRecipeDispatch: () => {
      dispatch(getRecipe())
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Home);
