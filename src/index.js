import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter, NavLink } from "react-router-dom";
import { HelloComponent } from "./animations";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { Burger, Menu } from "./components";
import { useOnClickOutside } from "./hooks";
import * as serviceWorker from "./serviceWorker";
import useRouter from "./useRouter";
import { useTransition, animated } from "react-spring";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navigation from "./components/Navigation"
import Skills from "./Pages/Skills"
import Contact from "./Pages/Contact"

const App = () => {
  const { location } = useRouter();
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate3d(100vw, 0, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(-20vw, 0, 0)" }
  });



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



      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/Skills" component={Skills} />
            <Route path="/Contact" component={Contact} />
          </Switch>
        </animated.div>
      ))}
    </>
     </ThemeProvider>
  );


    /*

       <>

         <GlobalStyles />


         <HelloComponent/>

       </>

     */
  };


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
