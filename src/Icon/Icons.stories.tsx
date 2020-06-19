// external modules
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { text, withKnobs } from '@storybook/addon-knobs';

// internal modules
import icons, {
  alertCircle,
  alertOctagon,
  alertTriangle,
  alignCenter,
  alignJustify,
  alignLeft,
  alignRight,
  anchor,
  aperture,
  archive,
  arrowDown,
  arrowDownCircle,
  arrowDownLeft,
  arrowDownRight,
  arrowLeft,
  arrowLeftCircle,
  arrowRight,
  arrowRightCircle,
  arrowUp,
  arrowUpCircle,
  arrowUpLeft,
  arrowUpRight,
  atSign,
  bell,
  bellOff,
  bluetooth,
  bold,
  book,
  bookmark,
  bookOpen,
  box,
  briefcase,
  calendar,
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
} from '@/icons/index.ts';
import SVGIcon from './Icon';

export default {
  title: 'components|Icons',
  component: SVGIcon,
  decorators: [withKnobs],
};

export const AlertCircle = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={alertCircle} userColor={userColor} color={color} />;
};

export const AlertOctagon = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={alertOctagon} userColor={userColor} color={color} />;
};

export const AlertTriangle = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={alertTriangle} userColor={userColor} color={color} />;
};

export const AlignCenter = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={alignCenter} userColor={userColor} color={color} />;
};

export const AlignJustify = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={alignJustify} userColor={userColor} color={color} />;
};

export const AlignLeft = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={alignLeft} userColor={userColor} color={color} />;
};

export const AlignRight = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={alignRight} userColor={userColor} color={color} />;
};

export const Anchor = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={anchor} userColor={userColor} color={color} />;
};

export const Aperture = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={aperture} userColor={userColor} color={color} />;
};

export const Archive = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={archive} userColor={userColor} color={color} />;
};

export const ArrowDown = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={arrowDown} userColor={userColor} color={color} />;
};

export const ArrowDownCircle = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={arrowDownCircle} userColor={userColor} color={color} />;
};

export const ArrowDownLeft = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={arrowDownLeft} userColor={userColor} color={color} />;
};

export const ArrowDownRight = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={arrowDownRight} userColor={userColor} color={color} />;
};

export const ArrowLeft = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={arrowLeft} userColor={userColor} color={color} />;
};

export const ArrowLeftCircle = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={arrowLeftCircle} userColor={userColor} color={color} />;
};

export const ArrowRight = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={arrowRight} userColor={userColor} color={color} />;
};

export const ArrowRightCircle = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={arrowRightCircle} userColor={userColor} color={color} />;
};

export const ArrowUp = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={arrowUp} userColor={userColor} color={color} />;
};

export const ArrowUpCircle = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={arrowUpCircle} userColor={userColor} color={color} />;
};

export const ArrowUpLeft = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={arrowUpLeft} userColor={userColor} color={color} />;
};

export const ArrowUpRight = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={arrowUpRight} userColor={userColor} color={color} />;
};

export const AtSign = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={atSign} userColor={userColor} color={color} />;
};

export const Bell = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={bell} userColor={userColor} color={color} />;
};

export const BellOff = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={bellOff} userColor={userColor} color={color} />;
};

export const Bluetooth = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={bluetooth} userColor={userColor} color={color} />;
};

export const Bold = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={bold} userColor={userColor} color={color} />;
};

export const Book = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={book} userColor={userColor} color={color} />;
};

export const Bookmark = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={bookmark} userColor={userColor} color={color} />;
};

export const BookOpen = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={bookOpen} userColor={userColor} color={color} />;
};

export const Box = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={box} userColor={userColor} color={color} />;
};

export const Briefcase = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={briefcase} userColor={userColor} color={color} />;
};

export const Calendar = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={calendar} userColor={userColor} color={color} />;
};

export const Camera = (color?: string): JSX.Element => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={camera} userColor={userColor} color={color} />;
};

export const CameraOff = (color?: string) => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={cameraOff} userColor={userColor} color={color} />;
};

export const Cast = (color?: string) => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={cast} userColor={userColor} color={color} />;
};

export const Check = (color?: string) => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={check} userColor={userColor} color={color} />;
};

export const CheckCircle = (color?: string) => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={checkCircle} userColor={userColor} color={color} />;
};

export const CheckSquare = (color?: string) => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={checkSquare} userColor={userColor} color={color} />;
};

export const ChevronDown = (color?: string) => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={chevronDown} userColor={userColor} color={color} />;
};

export const ChevronLeft = (color?: string) => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={chevronLeft} userColor={userColor} color={color} />;
};

export const ChevronRight = (color?: string) => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={chevronRight} userColor={userColor} color={color} />;
};

export const ChevronUp = (color?: string) => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={chevronUp} userColor={userColor} color={color} />;
};

export const ChevronsDown = (color?: string) => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={chevronsDown} userColor={userColor} color={color} />;
};

export const ChevronsLeft = (color?: string) => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={chevronsLeft} userColor={userColor} color={color} />;
};

export const ChevronsRight = (color?: string) => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={chevronsRight} userColor={userColor} color={color} />;
};

export const ChevronsUp = (color?: string) => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={chevronsUp} userColor={userColor} color={color} />;
};

export const Chrome = (color?: string) => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={chrome} userColor={userColor} color={color} />;
};

export const Circle = (color?: string) => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={circle} userColor={userColor} color={color} />;
};

export const Clipboard = (color?: string) => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={clipboard} userColor={userColor} color={color} />;
};

export const Clock = (color?: string) => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={clock} userColor={userColor} color={color} />;
};

export const Cloud = (color?: string) => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={cloud} userColor={userColor} color={color} />;
};

export const CloudDrizzle = (color?: string) => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={cloudDrizzle} userColor={userColor} color={color} />;
};

export const CloudLightning = (color?: string) => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={cloudLightning} userColor={userColor} color={color} />;
};

export const CloudOff = (color?: string) => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={cloudOff} userColor={userColor} color={color} />;
};

export const CloudRain = (color?: string) => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={cloudRain} userColor={userColor} color={color} />;
};

export const CloudSnow = (color?: string) => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={cloudSnow} userColor={userColor} color={color} />;
};

export const CornerDownLeft = (color?: string) => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={cornerDownLeft} userColor={userColor} color={color} />;
};

export const CornerDownRight = (color?: string) => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={cornerDownRight} userColor={userColor} color={color} />;
};

export const CornerLeftDown = (color?: string) => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={cornerLeftDown} userColor={userColor} color={color} />;
};

export const CornerLeftUp = (color?: string) => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={cornerLeftUp} userColor={userColor} color={color} />;
};

export const CornerRightDown = (color?: string) => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={cornerRightDown} userColor={userColor} color={color} />;
};

export const CornerRightUp = (color?: string) => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={cornerRightUp} userColor={userColor} color={color} />;
};

export const CornerUpLeft = (color?: string) => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={cornerUpLeft} userColor={userColor} color={color} />;
};

export const CornerUpRight = (color?: string) => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={cornerUpRight} userColor={userColor} color={color} />;
};

export const Facebook = (color?: string) => {
  const userColor = text('userColor', undefined);

  return <SVGIcon component={facebook} userColor={userColor} color={color} />;
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

  const setPrev = (icon: string) => {
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
