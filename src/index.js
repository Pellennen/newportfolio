import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter, NavLink } from 'react-router-dom';
import {HelloComponent} from './animations'
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu } from './components';
import { useOnClickOutside } from './hooks';
import * as serviceWorker from './serviceWorker';

const App = () => {
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
       <>

         <GlobalStyles />

         <div ref={node}>
         <Burger open = {open} setOpen={setOpen}/>
         <Menu open = {open} setOpen={setOpen} />
         </div>
         <HelloComponent/>

       </>
     </ThemeProvider>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);

serviceWorker.unregister();
