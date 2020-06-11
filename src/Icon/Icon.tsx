// external moudles
/** @jsx jsx */
import { jsx } from '@emotion/core';

// internal modules
import * as icons from '@/icons';
// import icons from '@/icons';

console.log(icons);

type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as any[];

export type IconProps = {
  /** 사용 할 아이콘 타입 */
  icon: IconType;
  /** 아이콘 색상 */
  color?: string;
  /** 아이콘 크기 */
  size?: string | number;
};

/** Icon 컴포넌트 */
const Icon = ({ icon, color, size }: IconProps): JSX.Element => {
  const SVGIcon = icons[icon];

  return <SVGIcon css={{ color, width: size, height: 'auto' }} />;
};

export default Icon;
