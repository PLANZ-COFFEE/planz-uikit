// external moudles
/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

// SVGIcon
const SVGIcon = React.forwardRef((props, ref) => {
  const { children, color, component: Component = 'svg' } = props;

  return (
    <Component color={color} ref={ref}>
      {children}
    </Component>
  );
});

export default SVGIcon;
