import React from "react";
import { useTransition, animated, config } from "react-spring";
import useRouter from "../useRouter";
import Page from "../components/Page";
import SkillsComponent from "../components/Skills/SkillsComponent";
const Skills = () => {
  const { location } = useRouter();
  const transitions = useTransition(location, location => location.pathname, {
    from: { transform: "translateY(10)" },
    enter: { transform: "translateY(0)" },
    leave: { transform: "translateY(10)" },
    config: config.stiff
  });

  return (
    <Page style={{ background: "lightpink" }}>
      {transitions.map(({ item, props, key }) => (
        <animated.span key={key} style={props}>
          <SkillsComponent />
        </animated.span>
      ))}
    </Page>
  );
};

export default Skills;
