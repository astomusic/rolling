import * as React from 'react';

import {
  Analytics,
  ArrowAnimation,
  ArrowCircleDown,
  ArrowDot,
  Back,
  Check,
  CheckBaby,
  CheckCircle,
  Checker,
  CheckerMid,
  CheckerMini,
  CheckerNone,
  Close,
  CurveDown,
  CurveUp,
  Dashboard,
  Data,
  Desktop,
  Done,
  DotOff,
  DotOn,
  DownBracket,
  EyeTracker,
  Fail,
  GameList,
  LeftArrow,
  LeftHand,
  Logo,
  LooxidLink,
  LxAnalytics,
  LxStudio,
  MenuList,
  MenuShrinkage,
  PlayerCancel,
  PlayerList,
  PlayLogo,
  Ranking,
  Refresh,
  ResultList,
  RightArrow,
  RightBracket,
  Run,
  Studio,
  SystemLine,
  Time,
  TrashBin,
  Uploading,
  User,
  UserGroup,
  UserType,
  VR,
} from '../icon';

export interface IconProps {
  name: string;
  size?: number;
  color?: string;
  padding?: string;
}

const Icon = (props: IconProps) => {
  switch (props.name) {
    case 'left-arrow':
      return <LeftArrow {...props} />;
    case 'right-arrow':
      return <RightArrow {...props} />;
    case 'dot-on':
      return <DotOn {...props} />;
    case 'dot-off':
      return <DotOff {...props} />;
    case 'eye-tracker':
      return <EyeTracker {...props} />;
    case 'looxid-link':
      return <LooxidLink {...props} />;
    case 'vr':
      return <VR {...props} />;
    case 'studio':
      return <Studio {...props} />;
    case 'analytics':
      return <Analytics {...props} />;
    case 'desktop':
      return <Desktop {...props} />;
    case 'arrow-animation':
      return <ArrowAnimation {...props} />;
    case 'arrow-circle-down':
      return <ArrowCircleDown {...props} />;
    case 'logo':
      return <Logo {...props} />;
    case 'arrow-dot':
      return <ArrowDot {...props} />;
    case 'dashboard':
      return <Dashboard {...props} />;
    case 'lx-studio':
      return <LxStudio {...props} />;
    case 'run':
      return <Run {...props} />;
    case 'data':
      return <Data {...props} />;
    case 'lx-analytics':
      return <LxAnalytics {...props} />;
    case 'menu-list':
      return <MenuList {...props} />;
    case 'menu-shrinkage':
      return <MenuShrinkage {...props} />;
    case 'trash-bin':
      return <TrashBin {...props} />;
    case 'checker':
      return <Checker {...props} />;
    case 'checker-mini':
      return <CheckerMini {...props} />;
    case 'system-line':
      return <SystemLine {...props} />;
    case 'checker-mid':
      return <CheckerMid {...props} />;
    case 'curve-down':
      return <CurveDown {...props} />;
    case 'curve-up':
      return <CurveUp {...props} />;
    case 'checker-none':
      return <CheckerNone {...props} />;
    case 'user':
      return <User {...props} />;
    case 'close':
      return <Close {...props} />;
    case 'check':
      return <Check {...props} />;
    case 'right-bracket':
      return <RightBracket {...props} />;
    case 'down-bracket':
      return <DownBracket {...props} />;
    case 'done':
      return <Done {...props} />;
    case 'fail':
      return <Fail {...props} />;
    case 'uploading':
      return <Uploading {...props} />;
    case 'refresh':
      return <Refresh {...props} />;
    case 'play-logo':
      return <PlayLogo {...props} />;
    case 'player-list':
      return <PlayerList {...props} />;
    case 'game-list':
      return <GameList {...props} />;
    case 'result-list':
      return <ResultList {...props} />;
    case 'ranking':
      return <Ranking {...props} />;
    case 'player-cancel':
      return <PlayerCancel {...props} />;
    case 'user-type':
      return <UserType {...props} />;
    case 'user-group':
      return <UserGroup {...props} />;
    case 'left-hand':
      return <LeftHand {...props} />;
    case 'time':
      return <Time {...props} />;
    case 'check-circle':
      return <CheckCircle {...props} />;
    case 'check-baby':
      return <CheckBaby {...props} />;
    case 'back':
      return <Back {...props} />;
    default:
      return <div />;
  }
};

Icon.defaultProps = {
  color: '#fff',
  size: 25,
};

export default Icon;
