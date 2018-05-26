import { combineReducers, compose, createStore } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import firebase from 'firebase';

import currency from './currency';

const firebaseConfig = {
  apiKey: 'AIzaSyANWJyA_O4ejRpOpf-sGEH1xlUc8RephFI',
  authDomain: 'pdf-filter.firebaseapp.com',
  databaseURL: 'https://pdf-filter.firebaseio.com',
  projectId: 'pdf-filter',
  storageBucket: 'pdf-filter.appspot.com',
  messagingSenderId: '885279418403'
};

const rrfConfig = {
  userProfile: 'users'
};

firebase.initializeApp(firebaseConfig);

export const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig)
)(createStore);

export default combineReducers({
  routing: routerReducer,
  firebase: firebaseReducer,
  currency
});
