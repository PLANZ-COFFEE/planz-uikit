// external moudles
/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

/**  SVGIcon props */
type SVGprops = {
  color?: string;
  component: React.ElementType;
};

/**  SVGIcon */
const SVGIcon: React.FunctionComponent<SVGprops> = React.forwardRef((props, ref) => {
  const { children, color, component: Component = 'svg' } = props;

  return (
    <Component color={color} ref={ref}>
      {children}
    </Component>
  );
});

export default SVGIcon;
