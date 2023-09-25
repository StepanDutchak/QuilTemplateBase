import 'react-native-gesture-handler';

import React from 'react';

import {Provider} from 'react-redux';
import {store, persistor} from './src/core/store';
import {PersistGate} from 'redux-persist/lib/integration/react';

import {AuthProvider} from './src/core/context/Auth/AuthProvider';
import {Navigation} from './src/core/navigators';
import {AppProvider} from './src/core/context/AppState/AppProvider';
import {ThemeProvider} from './src/core/context/Theme/ThemeProvider';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <AuthProvider>
            <AppProvider>
              <Navigation />
            </AppProvider>
          </AuthProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
