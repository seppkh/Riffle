import React, { useState } from 'react';
import Menu from '../menu';
import { SplitLayout } from '../../components/Layout';
import TiltedScreen from '../../components/TiltedScreen';
import Logo from '../../components/Logo';
import { useEffect } from 'react';
import useStoreSlices from '../../store/rootSliceStore';
import { Outlet } from 'react-router-dom';

const LandingScreen = (props) => {
  const [setSelectedMenuOption] = useState(null);
  const setGameStateToMenu = useStoreSlices(
    (state) => state.setGameStateToMenu
  );

  useEffect(() => {
    setGameStateToMenu();
  }, []);

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
          <Outlet />
        </TiltedScreen>
      }
    />
  );
};

export default LandingScreen;
