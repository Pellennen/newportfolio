import React, { useState, useRef } from 'react';
import {HelloComponent} from './animations'
import { About } from './otherpages'
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu } from './components';
import { useOnClickOutside } from './hooks';


function App() {

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
}

export default App;
