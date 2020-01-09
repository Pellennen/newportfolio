import React from 'react';
import ReactVivus from 'react-vivus';
import svg from './svg/download.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="BackgroundBlack">

      <ReactVivus
   id="foo"
   option={{
     file: svg,
     animTimingFunction: 'EASE',
     type: 'oneByOne',
     onReady: console.log
   }}
   style={{ height: '100px', width: '100px' }}
   callback={console.log}
 />



      </div>
    </div>
  );
}

export default App;
