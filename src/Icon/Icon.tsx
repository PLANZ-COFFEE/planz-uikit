// external moudles
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';

/**  SVGIcon props */
type SVGprops = {
  my?: string;
  color?: string;
  component: React.ElementType;
};

/**  SVGIcon */
const SVGIcon: React.FunctionComponent<SVGprops> = React.forwardRef((props, ref) => {
  const { children, color, component: Component = 'svg' } = props;
  let my = props.my;

  console.log('co', color);
  console.log('my', my);
  console.log('type my', typeof my);

  if (typeof my === 'object') {
    my = my.my;
    console.log('fin my', my);
  }

  return (
    <Component
      color={color}
      css={css`
        color: ${my};
      `}
      ref={ref}
    >
      {children}
    </Component>
  );
});

export default SVGIcon;
