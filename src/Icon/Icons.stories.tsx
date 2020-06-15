// external modules
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { text, withKnobs } from '@storybook/addon-knobs';

// internal modules
import icons, {
  camera,
  cameraOff,
  cast,
  check,
  checkCircle,
  checkSquare,
  chevronDown,
  chevronLeft,
  chevronRight,
  chevronUp,
  chevronsDown,
  chevronsLeft,
  chevronsRight,
  chevronsUp,
  chrome,
  circle,
  clipboard,
  clock,
  cloud,
  cloudDrizzle,
  cloudLightning,
  cloudOff,
  cloudRain,
  cloudSnow,
  cornerDownLeft,
  cornerDownRight,
  cornerLeftDown,
  cornerLeftUp,
  cornerRightDown,
  cornerRightUp,
  cornerUpLeft,
  cornerUpRight,
  facebook,
} from '@/icons';
import SVGIcon from './Icon';

export default {
  title: 'components|Icons',
  component: SVGIcon,
  decorators: [withKnobs],
};

export const Camera = () => {
  const color = text('color', undefined);

  return <SVGIcon component={camera} color={color} />;
};

export const CameraOff = () => {
  const color = text('color', undefined);

  return <SVGIcon component={cameraOff} color={color} />;
};

export const Cast = () => {
  const color = text('color', undefined);

  return <SVGIcon component={cast} color={color} />;
};

export const Check = () => {
  const color = text('color', undefined);

  return <SVGIcon component={check} color={color} />;
};

export const CheckCircle = () => {
  const color = text('color', undefined);

  return <SVGIcon component={checkCircle} color={color} />;
};

export const CheckSquare = () => {
  const color = text('color', undefined);

  return <SVGIcon component={checkSquare} color={color} />;
};

export const ChevronDown = () => {
  const color = text('color', undefined);

  return <SVGIcon component={chevronDown} color={color} />;
};

export const ChevronLeft = () => {
  const color = text('color', undefined);

  return <SVGIcon component={chevronLeft} color={color} />;
};

export const ChevronRight = () => {
  const color = text('color', undefined);

  return <SVGIcon component={chevronRight} color={color} />;
};

export const ChevronUp = () => {
  const color = text('color', undefined);

  return <SVGIcon component={chevronUp} color={color} />;
};

export const ChevronsDown = () => {
  const color = text('color', undefined);

  return <SVGIcon component={chevronsDown} color={color} />;
};

export const ChevronsLeft = () => {
  const color = text('color', undefined);

  return <SVGIcon component={chevronsLeft} color={color} />;
};

export const ChevronsRight = () => {
  const color = text('color', undefined);

  return <SVGIcon component={chevronsRight} color={color} />;
};

export const ChevronsUp = () => {
  const color = text('color', undefined);

  return <SVGIcon component={chevronsUp} color={color} />;
};

export const Chrome = () => {
  const color = text('color', undefined);

  return <SVGIcon component={chrome} color={color} />;
};

export const Circle = () => {
  const color = text('color', undefined);

  return <SVGIcon component={circle} color={color} />;
};

export const Clipboard = () => {
  const color = text('color', undefined);

  return <SVGIcon component={clipboard} color={color} />;
};

export const Clock = () => {
  const color = text('color', undefined);

  return <SVGIcon component={clock} color={color} />;
};

export const Cloud = () => {
  const color = text('color', undefined);

  return <SVGIcon component={cloud} color={color} />;
};

export const CloudDrizzle = () => {
  const color = text('color', undefined);

  return <SVGIcon component={cloudDrizzle} color={color} />;
};

export const CloudLightning = () => {
  const color = text('color', undefined);

  return <SVGIcon component={cloudLightning} color={color} />;
};

export const CloudOff = () => {
  const color = text('color', undefined);

  return <SVGIcon component={cloudOff} color={color} />;
};

export const CloudRain = () => {
  const color = text('color', undefined);

  return <SVGIcon component={cloudRain} color={color} />;
};

export const CloudSnow = () => {
  const color = text('color', undefined);

  return <SVGIcon component={cloudSnow} color={color} />;
};

export const CornerDownLeft = () => {
  const color = text('color', undefined);

  return <SVGIcon component={cornerDownLeft} color={color} />;
};

export const CornerDownRight = () => {
  const color = text('color', undefined);

  return <SVGIcon component={cornerDownRight} color={color} />;
};

export const CornerLeftDown = () => {
  const color = text('color', undefined);

  return <SVGIcon component={cornerLeftDown} color={color} />;
};

export const CornerLeftUp = () => {
  const color = text('color', undefined);

  return <SVGIcon component={cornerLeftUp} color={color} />;
};

export const CornerRightDown = () => {
  const color = text('color', undefined);

  return <SVGIcon component={cornerRightDown} color={color} />;
};

export const CornerRightUp = () => {
  const color = text('color', undefined);

  return <SVGIcon component={cornerRightUp} color={color} />;
};

export const CornerUpLeft = () => {
  const color = text('color', undefined);

  return <SVGIcon component={cornerUpLeft} color={color} />;
};

export const CornerUpRight = () => {
  const color = text('color', undefined);

  return <SVGIcon component={cornerUpRight} color={color} />;
};

export const Facebook = () => {
  const color = text('color', undefined);

  return <SVGIcon component={facebook} color={color} />;
};

// list of icons
export const listOfIcons = () => {
  let prevIcon = null;

  // 아이콘 첫 대문자 위치
  const getFirstCapitalPos = (icon: string) => {
    const regExp = /[A-Z]/;

    return icon.match(regExp);
  };

  // 아이콘의 대문자 시작 전 소문자 가져오기
  const getSmall = (icon: string) => {
    if (getFirstCapitalPos(icon)) {
      return icon.substr(0, getFirstCapitalPos(icon).index);
    }

    return icon;
  };

  const setPrev = icon => {
    if (prevIcon !== icon) {
      prevIcon = icon;

      return true;
    }

    return false;
  };

  const iconTitles = Object.keys(icons);

  return (
    <ul css={iconListStyle}>
      {iconTitles.sort().map(icon => (
        <li key={icon}>
          <p css={iconTitle} style={{ display: setPrev(getSmall(icon)) ? 'block' : 'none' }}>
            {getSmall(icon)}
          </p>
          <div css={iconWrapper}>
            <SVGIcon component={icons[icon]} />
            {icon}
          </div>
        </li>
      ))}
    </ul>
  );
};

const iconListStyle = css`
  list-style: none;
  li {
    box-sizing: border-box;
    padding: 1rem;
    svg {
      margin-right: 1rem;
    }
  }
`;

const iconTitle = css`
  font-size: 2em;
  font-weight: 600;
`;

const iconWrapper = css`
  display: flex;
  align-items: center;
  margin-left: 1.5em;
`;
