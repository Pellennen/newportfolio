import React from "react";
import { useTransition, animated, config } from "react-spring";
import useRouter from "../useRouter";
import Page from "../components/Page";

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
          <ul>
            <li>Es6 Level: Intermediate </li>
            <li>React Level: Beginner</li>
            <li>Angular Level: Beginner</li>
            <li>Css Level: Intermediate</li>
            <li>Html Level: Intermediate </li>
            <li>Testframeworks: Jest, Enzyme</li>
            <li>Tools : Node, Git, Gitlab, Webpack etc.. </li>
          </ul>
        </animated.span>
      ))}
    </Page>
  );
};

export default Skills;
