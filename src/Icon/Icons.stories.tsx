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
} from '@/icons';
import SVGIcon from './Icon';

export default {
  title: 'components|Icons',
  component: SVGIcon,
  decorators: [withKnobs],
};

export const AlertCircle = (): JSX.Element => {
  const color = text('color', undefined);

  return <SVGIcon component={alertCircle} color={color} />;
};

export const AlertOctagon = (): JSX.Element => {
  const color = text('color', undefined);

  return <SVGIcon component={alertOctagon} color={color} />;
};

export const AlertTriangle = (): JSX.Element => {
  const color = text('color', undefined);

  return <SVGIcon component={alertTriangle} color={color} />;
};

export const AlignCenter = (): JSX.Element => {
  const color = text('color', undefined);

  return <SVGIcon component={alignCenter} color={color} />;
};

export const AlignJustify = (): JSX.Element => {
  const color = text('color', undefined);

  return <SVGIcon component={alignJustify} color={color} />;
};

export const AlignLeft = (): JSX.Element => {
  const color = text('color', undefined);

  return <SVGIcon component={alignLeft} color={color} />;
};

export const AlignRight = (): JSX.Element => {
  const color = text('color', undefined);

  return <SVGIcon component={alignRight} color={color} />;
};

export const Anchor = (): JSX.Element => {
  const color = text('color', undefined);

  return <SVGIcon component={anchor} color={color} />;
};

export const Aperture = (): JSX.Element => {
  const color = text('color', undefined);

  return <SVGIcon component={aperture} color={color} />;
};

export const Archive = (): JSX.Element => {
  const color = text('color', undefined);

  return <SVGIcon component={archive} color={color} />;
};

export const ArrowDown = (): JSX.Element => {
  const color = text('color', undefined);

  return <SVGIcon component={arrowDown} color={color} />;
};

export const ArrowDownCircle = (): JSX.Element => {
  const color = text('color', undefined);

  return <SVGIcon component={arrowDownCircle} color={color} />;
};

export const ArrowDownLeft = (): JSX.Element => {
  const color = text('color', undefined);

  return <SVGIcon component={arrowDownLeft} color={color} />;
};

export const ArrowDownRight = (): JSX.Element => {
  const color = text('color', undefined);

  return <SVGIcon component={arrowDownRight} color={color} />;
};

export const ArrowLeft = (): JSX.Element => {
  const color = text('color', undefined);

  return <SVGIcon component={arrowLeft} color={color} />;
};

export const ArrowLeftCircle = (): JSX.Element => {
  const color = text('color', undefined);

  return <SVGIcon component={arrowLeftCircle} color={color} />;
};

export const ArrowRight = (): JSX.Element => {
  const color = text('color', undefined);

  return <SVGIcon component={arrowRight} color={color} />;
};

export const ArrowRightCircle = (): JSX.Element => {
  const color = text('color', undefined);

  return <SVGIcon component={arrowRightCircle} color={color} />;
};

export const ArrowUp = (): JSX.Element => {
  const color = text('color', undefined);

  return <SVGIcon component={arrowUp} color={color} />;
};

export const ArrowUpCircle = (): JSX.Element => {
  const color = text('color', undefined);

  return <SVGIcon component={arrowUpCircle} color={color} />;
};

export const ArrowUpLeft = (): JSX.Element => {
  const color = text('color', undefined);

  return <SVGIcon component={arrowUpLeft} color={color} />;
};

export const ArrowUpRight = (): JSX.Element => {
  const color = text('color', undefined);

  return <SVGIcon component={arrowUpRight} color={color} />;
};

export const AtSign = (): JSX.Element => {
  const color = text('color', undefined);

  return <SVGIcon component={atSign} color={color} />;
};

export const Bell = (): JSX.Element => {
  const color = text('color', undefined);

  return <SVGIcon component={bell} color={color} />;
};

export const BellOff = (): JSX.Element => {
  const color = text('color', undefined);

  return <SVGIcon component={bellOff} color={color} />;
};

export const Bluetooth = (): JSX.Element => {
  const color = text('color', undefined);

  return <SVGIcon component={bluetooth} color={color} />;
};

export const Bold = (): JSX.Element => {
  const color = text('color', undefined);

  return <SVGIcon component={bold} color={color} />;
};

export const Book = (): JSX.Element => {
  const color = text('color', undefined);

  return <SVGIcon component={book} color={color} />;
};

export const Bookmark = (): JSX.Element => {
  const color = text('color', undefined);

  return <SVGIcon component={bookmark} color={color} />;
};

export const BookOpen = (): JSX.Element => {
  const color = text('color', undefined);

  return <SVGIcon component={bookOpen} color={color} />;
};

export const Box = (): JSX.Element => {
  const color = text('color', undefined);

  return <SVGIcon component={box} color={color} />;
};

export const Briefcase = (): JSX.Element => {
  const color = text('color', undefined);

  return <SVGIcon component={briefcase} color={color} />;
};

export const Calendar = (): JSX.Element => {
  const color = text('color', undefined);

  return <SVGIcon component={calendar} color={color} />;
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
