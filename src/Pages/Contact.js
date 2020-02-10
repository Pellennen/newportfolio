import React from "react";
import { useTransition, animated, config } from "react-spring";
import useRouter from "../useRouter";
import ContactFlowers from "../animations/contactflowers/contactflowers"
import "./contact.css"
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
        <div className="animatedcontainer">
        <div className="contactcontainer">
        <ContactFlowers/>
        <Contact/>
        </div>
        </div>

        </animated.span>
      ))}
    </>
  );
};

export default Skills;
