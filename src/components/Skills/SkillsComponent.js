
import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import './Skills.css'

const pages = [
  ({ style }) => <animated.div style={{ ...style, width:'300px', fontSize:'1em' }}>Click here to see some skills and tools i use</animated.div>,
  ({ style }) => <animated.div style={{ ...style, }}>Javascript Level Intermediate </animated.div>,
  ({ style }) => <animated.div style={{ ...style, }}>React Level Beginner</animated.div>,
  ({ style }) => <animated.div style={{ ...style, }}>Angular Level Beginner</animated.div>,
  ({ style }) => <animated.div style={{ ...style, }}>Css Level Intermediate</animated.div>,
  ({ style }) => <animated.div style={{ ...style, }}>Html Level Intermediate </animated.div>,
  ({ style }) => <animated.div style={{ ...style,width:'300px', fontSize:'0.9em'  }}> I Just started using testframeworks: Jest, Enzyme </animated.div>,
  ({ style }) => <animated.div style={{ ...style, width:'300px', fontSize:'1em' }}>Tools I use : Node, Git, Gitlab, Atom </animated.div>,
  ({ style }) => <animated.div style={{ ...style, width:'300px', fontSize:'1em' }}>... </animated.div>
]

const SkillsComponent = () => {
  const [index, set] = useState(0)
   const onClick = useCallback(() => set(state => (state + 1) % 9), [])
   const transitions = useTransition(index, p => p, {
     from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
     enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
     leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
   })
   return (

     <div className="simple-trans-main" onClick={onClick}>
       {transitions.map(({ item, props, key }) => {
         const Page = pages[item]
         return <Page key={key} style={props} />
       })}
     </div>
   )
};

export default SkillsComponent;
