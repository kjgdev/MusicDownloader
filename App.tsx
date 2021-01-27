import React, { useEffect } from 'react';
import Navigator from './src/navigations';
import { LogBox, StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from "./src/services/redux/store"
import color from '@config/colors';
import PopupDelete from '@components/atoms/PopupDelete';
import PopupRename from '@components/atoms/PopupRename';
import PopupCollection from '@components/atoms/PopupCollection';
import PopupCreateCollect from '@components/atoms/PopupCreateCollect';

const App = () => {
  LogBox.ignoreLogs(['Warning: ...'])
  LogBox.ignoreAllLogs();

  return (
    <Provider store={store}>
      <StatusBar backgroundColor={color.BG_All} />
      <Navigator />
    </Provider>
  );
};

export default App;
