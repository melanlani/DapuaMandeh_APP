import React, { Component } from 'react';
import { StyleSheet, Alert, Image, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { Container, Drawer, Content, Header, Left, Body, Right, Button, Icon, Title, CardItem, Card, Thumbnail} from 'native-base';
import { getData, removeData } from './storage';
import { connect } from 'react-redux';
import { getUserData, dropUser } from '../redux/actions/accounts';
class Profile extends Component {

  componentDidMount() {

    this.props.navigation.addListener('didFocus', () => {
      if (this.props.LoggedIn === false) {
          this.props.navigation.navigate('Login')
      }
      else {
          this.checkToken();
      }
    })
  }

  checkToken = async () => {
      const token = await getData('token')
      if (token) {
          this.props.getUserDataDispatch(token);
      }
  }

  logout() {
    Alert.alert(
        'Apakah yakin ingin keluar?',
        '',
        [
          {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'batal',
          },
          { text: 'iya', onPress: () =>
            {
              this.props.dropUserDispatch()
              removeData('token')
              this.props.navigation.navigate('Login')
            }
          },
        ],
      { cancelable: false },
    );
  }

  render() {

    const { id, username, email, foto } = this.props.user

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
                <Thumbnail circle large source={{ uri: foto }} />
              </Left>
              <Body>
                <Text style={styles.txtname}>{username}</Text>
                <Text style={styles.txtemail}>{email}</Text>
              </Body>
              <Right>
                <Button style={styles.btnLogout} onPress={() => this.logout()}>
                  <Text style={styles.txtlogout}>Keluar</Text>
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
  txtemail:{
    fontSize: 10
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
  },
  btnLogout: {
    backgroundColor: '#f76710',
    width:49,
    height:40,
    marginBottom: 35
  }

});

const mapStateToProps = state => ({
  loggedIn: state.accounts.isLoggedIn,
  user: state.accounts.user,
  token: state.accounts.access_token
})

const mapDispatchToProps = dispatch => {
  return {
    getUserDataDispatch: (token) => {
      dispatch(getUserData(token))
    },
    dropUserDispatch: () => {
      dispatch(dropUser())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
