import { storeData } from '../actions/storage';
const initialState = {
  user: {},
  access_token: {},
  loggedIn: false,
  loading: false,
}

export default accounts = (state = initialState, action) => {
  switch (action.type) {

    case 'LOGIN_USER_FULFILLED':

      const { token, type } = action.payload.data.access_token
      storeData('token', JSON.stringify(type + ' ' + token))
      return {
        ...state,
        isFulfilled: true,
        access_token: action.payload.data.access_token,
        user: action.payload.data.user,
        loggedIn: true,
        loading: false
      }
    case 'LOGIN_USER_REJECTED':

      return {
        isRejected: true,
        error: action.payload
      }
    case 'GET_USER_FULFILLED':
      return {
        ...state,
        user: action.payload.data.user,
        loading: true,
      }

    case 'DROP_USER':
      return {
        user: {},
        access_token: {},
        loggedIn: false,
        loading: false,
      }

    default:
      return state;
  }
}
