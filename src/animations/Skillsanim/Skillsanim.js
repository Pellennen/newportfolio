import React from 'react';
import ReactVivus from 'react-vivus';
import svg from './drawing-1_animated.svg';
import './Skillsanim.css'

const Skillsanim = () => (
  <ReactVivus
    id="fee"
    option={{
      file: svg,
      animTimingFunction: 'EASE',
      type: 'delayed',
      onReady: console.log
    }}
    callback={console.log}
  />
);
export default Skillsanim;
