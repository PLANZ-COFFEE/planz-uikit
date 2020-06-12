// external moudles
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState, useEffect, useRef } from 'react';

// internal modules
import * as icons from '@/icons';

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

// all as version
const Icon = ({ icon, color, size }: IconProps) => {
  const SVGIcon = icons[icon];

  return <SVGIcon css={{ color, width: size, height: 'auto' }} />;
};

// dynamic import version
// const Icon = ({ icon, color, size }: IconProps): JSX.Element => {
//   const importedIconRef = useRef();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const importIcon = async () => {
//       try {
//         importedIconRef.current = await import(`@/icons/${icon}`);
//         console.log(importedIconRef.current.default);

//         setLoading(false);
//       } catch (err) {
//         console.log(err);
//         throw err;
//       }
//     };
//     importIcon();
//   }, [icon]);

//   if (!loading && importedIconRef.current) {
//     const SVGIcon = importedIconRef.current.default;
//     console.log('icon', SVGIcon);

//     return <SVGIcon css={{ color, width: size, height: 'auto' }} />;
//   }

//   return null;
// };

export default Icon;
