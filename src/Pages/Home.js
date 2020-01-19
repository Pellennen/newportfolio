import React from "react";
import { useTransition, animated, config } from "react-spring";
import useRouter from "../useRouter";
import Page from "../components/Page";
import HelloComponent from "../animations/hellocomponent/HelloComponent"

const Home = () => {
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
        <animated.span key={key} style={props}>
<HelloComponent/>

        </animated.span>
      ))}
    </Page>
  );
};

export default Home;
