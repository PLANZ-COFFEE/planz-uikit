// external modules
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { text, withKnobs } from '@storybook/addon-knobs';

// internal modules
import SVGIcon from './Icon';
import {
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
} from '@/icons';

export default {
  component: SVGIcon,
  title: 'components|Icons',
  decorators: [withKnobs],
};

export const AlertCircle = (): JSX.Element => {
  const color = text('color', undefined);

  return <SVGIcon component={alertCircle} color={color} color={color} />;
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

// export const listOfIcons = (): JSX.Element => {
//   return (
//     <ul css={iconListStyle}>
//       {IconTypes.map(icon => (
//         <li key={icon}>
//           <Icon icon={icon} />
//           {icon}
//         </li>
//       ))}
//     </ul>
//   );
// };

const iconListStyle = css`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  li {
    box-sizing: border-box;
    width: 25%;
    padding: 1rem;
    display: flex;
    align-items: center;
    svg {
      margin-right: 1rem;
    }
  }
`;
