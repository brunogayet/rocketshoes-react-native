import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import colors from './styles/colors';

import store from './store';

import Routes from './routes';
import NavigationService from './services/navigation';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={colors.dark} />
      <Routes
        ref={(navigatorRef) => NavigationService.setNavigator(navigatorRef)}
      />
    </Provider>
  );
}
