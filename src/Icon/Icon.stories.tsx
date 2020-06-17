// external modules
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { text, withKnobs } from '@storybook/addon-knobs';

// internal modules
import icons, {
  film,
  hash,
  instagram,
  logIn,
  logOut,
  mapPin,
  map,
  minusCircle,
  minusSquare,
  moreHorizontal,
  moreVertical,
  phone,
  rotateCcw,
  rotateCw,
  shoppingCart,
  slash,
  sliders,
  thumbsDown,
  thumbsUp,
  umbrella,
  volume1,
  volume2,
  volumeX,
  volume,
  wifiOff,
  wifi,
  xCircle,
  xOctagon,
  xSquare,
  x,
  youtube,
  zoomIn,
  zoomOut,
} from '@/icons';
import SVGIcon from './Icon';

export default {
  title: 'components|Icons',
  component: SVGIcon,
  decorators: [withKnobs],
};

export const Film = () => {
  const color = text('color', undefined);

  return <SVGIcon component={film} color={color} />;
};

export const Hash = () => {
  const color = text('color', undefined);

  return <SVGIcon component={hash} color={color} />;
};

export const Instagram = () => {
  const color = text('color', undefined);

  return <SVGIcon component={instagram} color={color} />;
};

export const LogIn = () => {
  const color = text('color', undefined);

  return <SVGIcon component={logIn} color={color} />;
};

export const LogOut = () => {
  const color = text('color', undefined);

  return <SVGIcon component={logOut} color={color} />;
};

export const MapPin = () => {
  const color = text('color', undefined);

  return <SVGIcon component={mapPin} color={color} />;
};

export const Map = () => {
  const color = text('color', undefined);

  return <SVGIcon component={map} color={color} />;
};

export const MinusCircle = () => {
  const color = text('color', undefined);

  return <SVGIcon component={minusCircle} color={color} />;
};

export const MinusSquare = () => {
  const color = text('color', undefined);

  return <SVGIcon component={minusSquare} color={color} />;
};

export const MoreHorizontal = () => {
  const color = text('color', undefined);

  return <SVGIcon component={moreHorizontal} color={color} />;
};

export const MoreVertical = () => {
  const color = text('color', undefined);

  return <SVGIcon component={moreVertical} color={color} />;
};

export const Phone = () => {
  const color = text('color', undefined);

  return <SVGIcon component={phone} color={color} />;
};

export const RotateCcw = () => {
  const color = text('color', undefined);

  return <SVGIcon component={rotateCcw} color={color} />;
};

export const RotateCw = () => {
  const color = text('color', undefined);

  return <SVGIcon component={rotateCw} color={color} />;
};

export const ShoppingCart = () => {
  const color = text('color', undefined);

  return <SVGIcon component={shoppingCart} color={color} />;
};

export const Slash = () => {
  const color = text('color', undefined);

  return <SVGIcon component={slash} color={color} />;
};

export const Sliders = () => {
  const color = text('color', undefined);

  return <SVGIcon component={sliders} color={color} />;
};

export const ThumbsDown = () => {
  const color = text('color', undefined);

  return <SVGIcon component={thumbsDown} color={color} />;
};

export const ThumbsUp = () => {
  const color = text('color', undefined);

  return <SVGIcon component={thumbsUp} color={color} />;
};

export const Umbrella = () => {
  const color = text('color', undefined);

  return <SVGIcon component={umbrella} color={color} />;
};

export const Volume1 = () => {
  const color = text('color', undefined);

  return <SVGIcon component={volume1} color={color} />;
};

export const Volume2 = () => {
  const color = text('color', undefined);

  return <SVGIcon component={volume2} color={color} />;
};

export const VolumeX = () => {
  const color = text('color', undefined);

  return <SVGIcon component={volumeX} color={color} />;
};

export const Volume = () => {
  const color = text('color', undefined);

  return <SVGIcon component={volume} color={color} />;
};

export const WifiOff = () => {
  const color = text('color', undefined);

  return <SVGIcon component={wifiOff} color={color} />;
};

export const Wifi = () => {
  const color = text('color', undefined);

  return <SVGIcon component={wifi} color={color} />;
};

export const XCircle = () => {
  const color = text('color', undefined);

  return <SVGIcon component={xCircle} color={color} />;
};

export const XOctagon = () => {
  const color = text('color', undefined);

  return <SVGIcon component={xOctagon} color={color} />;
};

export const XSquare = () => {
  const color = text('color', undefined);

  return <SVGIcon component={xSquare} color={color} />;
};

export const X = () => {
  const color = text('color', undefined);

  return <SVGIcon component={x} color={color} />;
};

export const Youtube = () => {
  const color = text('color', undefined);

  return <SVGIcon component={youtube} color={color} />;
};

export const ZoomIn = () => {
  const color = text('color', undefined);

  return <SVGIcon component={zoomIn} color={color} />;
};

export const ZoomOut = () => {
  const color = text('color', undefined);

  return <SVGIcon component={zoomOut} color={color} />;
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
