// external moudles
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';

/**  SVGIcon props */
type SVGprops = {
  color?: string;
  userColor?: string;
  component: React.ElementType;
};

/**  SVGIcon */
const SVGIcon: React.FunctionComponent<SVGprops> = React.forwardRef((props, ref) => {
  const { children, userColor, component: Component = 'svg' } = props;
  let color = props.color;

  // code for library (to get a real color from the color object)
  if (typeof color === 'object') {
    color = color.color;
  }

  return (
    <Component
      color={userColor}
      css={css`
        color: ${color};
      `}
      ref={ref}
    >
      {children}
    </Component>
  );
});

export default SVGIcon;
