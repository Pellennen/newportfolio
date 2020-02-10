import React from 'react';
import ReactVivus from 'react-vivus';
import svg from './drawing4_animated.svg';
import './contactflowers.css'
const ContactFlowers = () => (
  <ReactVivus
    id="faa"
    option={{
      file: svg,
      animTimingFunction: 'EASE',
      duration:'1000',
      type: 'sync',
      onReady: console.log
    }}
    callback={console.log}
  />
);
export default ContactFlowers;
