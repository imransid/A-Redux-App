import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Appz from './componentes/reduxpro/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './componentes/reducers';

const store = createStore(reducers);

const AppContainer = () => 
    <Provider store = {store}>
      <Appz />
    </Provider>

export default AppContainer;