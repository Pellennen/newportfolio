import React from "react";

import { useTransition, animated, config } from "react-spring";
import useRouter from "../useRouter";
import Page from "../components/Page";

const About = () => {
  const { location } = useRouter();
  const transitions = useTransition(location, location => location.pathname, {
    from: { transform: "scale(10)" },
    enter: { transform: "scale(1)" },
    leave: { transform: "scale(10)" },
    config: config.stiff
  });

  return (
    <Page>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key}>
          <div className="slide-content txt">
            <div className="txt-wrapper">
              <h2>I’m Per Zackrisson</h2>
              <p className="excerpt">
                I have good attention to detail, people skills
                and really like problem solving. I have an empathic and
                fun personality and I am very passionate about what I do.
              </p>
            </div>
          </div>
        </animated.div>
      ))}
    </Page>
  );
};



export default About;
