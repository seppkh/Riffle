import React, { useState } from "react";
import Menu from "../menu";
import { SplitLayout } from "../../components/Layout";
import TiltedScreen from "../../components/TiltedScreen";
import Logo from "../../components/Logo";
import Explanation from "../../components/Explanation";

const LandingScreen = (props) => {
  const [selectedMenuOption, setSelectedMenuOption] = useState(null);
  return (
    <SplitLayout
      left={
        <>
          <Logo />
          <Menu onMenuItemSelect={setSelectedMenuOption} />
        </>
      }
      right={
        <TiltedScreen>
          <Explanation>
            {selectedMenuOption ? selectedMenuOption : "Hi"}
          </Explanation>
        </TiltedScreen>
      }
    />
  );
};

export default LandingScreen;
