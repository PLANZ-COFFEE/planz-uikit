// external moudles
/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';

// internal modules
import icons from '@/icons';
console.log(icons);

type IconType = keyof typeof icons;
export const IconTypes: IconType[] = Object.keys(icons) as any[];
console.log(IconTypes);

export type IconProps = {
  /** 사용 할 아이콘 타입 */
  icon: IconType;
  /** 아이콘 색상 */
  color?: string;
  /** 아이콘 크기 */
  size?: string | number;
};

/** Icon 컴포넌트 */
const SVGIcon = React.forwardRef((props, ref) => {
  const { children, component: Component = 'svg', color } = props;

  return (
    <Component ref={ref} css={{ color }}>
      {children}
    </Component>
  );
});

export default SVGIcon;
