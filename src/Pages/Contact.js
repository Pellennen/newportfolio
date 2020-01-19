import React from "react";
import { useTransition, animated, config } from "react-spring";
import useRouter from "../useRouter";

import Contact from "../components/Contact/Contact"

const Skills = () => {
  const { location } = useRouter();
  const transitions = useTransition(location, location => location.pathname, {
    from: { transform: "translateY(10)" },
    enter: { transform: "translateY(0)" },
    leave: { transform: "translateY(10)" },
    config: config.stiff
  });

  return (
 <>
      {transitions.map(({ item, props, key }) => (
        <animated.span key={key} style={props}>

        <Contact/>
        </animated.span>
      ))}
    </>
  );
};

export default Skills;
