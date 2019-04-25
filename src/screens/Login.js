import React, { Component } from 'react';
import { StyleSheet, Alert, Image, Text, View, FlatList, ActivityIndicator,TouchableOpacity } from 'react-native';
import { Container, Drawer, Content, Header, Left, Body, Right, Button, Icon, Title, CardItem, Card, Item, Input, Toast, Spinner} from 'native-base';
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/accounts';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      showToast: false
    };
  }

  login = () => {
    this.props.loginUserDispatch(this.state.email, this.state.password)
    if (this.props.loading == false) {
      Toast.show({
        text: "Selamat Datang",
        buttonText: "Okay",
        duration: 1500,
        type: "warning"
      })
      this.props.navigation.navigate('ButtomNav')
    }
  }

  render() {


    return (

      <Container>
        <Content>
          <Image source={require('./assets/images.jpg')} style={styles.banner}/>
          <Item style={styles.sizeItem}>
            <Input placeholder="Email" onChangeText={(email) => this.setState({email})}
              value={this.state.email}/>
          </Item>
          <Item style={styles.sizeItem}>
            <Input placeholder="Password" secureTextEntry={true} onChangeText={(password) => this.setState({password})}
              value={this.state.password} />
          </Item>
          <Button style={styles.btnLogin} onPress={() => this.login()}>
            <Text style={styles.txtlogin}>Masuk</Text>
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

const mapStateToProps = state => ({
    loggedIn: state.accounts.loggedIn,
    user: state.accounts.user,
    loading: state.accounts.loading,
})

const mapDispatchToProps = dispatch => {
  return {
    loginUserDispatch: (email, password) => {
    dispatch(loginUser(email, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
