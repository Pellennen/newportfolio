import React from 'react';
import ReactVivus from 'react-vivus';
import svg from './mesv_animated.svg';
import './itsame.css'
const ItSAMe = () => (
  <ReactVivus
    id="foo"
    option={{
      file: svg,
      animTimingFunction: 'EASE',
      type: 'oneByOne',
      onReady: console.log
    }}
    callback={console.log}
  />
);
export default ItSAMe;
