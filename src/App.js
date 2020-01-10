import React from 'react';
import HelloComponent from './animations/hellocomponent/HelloComponent.js'

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
       <>
         <GlobalStyles />
         <HelloComponent/>
       </>
     </ThemeProvider>
  );
}

export default App;
