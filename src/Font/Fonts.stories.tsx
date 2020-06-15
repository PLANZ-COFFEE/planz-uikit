// external modules
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { text, withKnobs } from '@storybook/addon-knobs';

// internal modules
import Font from './Font';

export default {
  title: 'components|Fonts',
  component: Font,
  decorators: [withKnobs],
};

export const contentEn = (): JSX.Element => {
  const fontFamily = text('fontFamily', 'Open Sans');
  const lineHeight = text('lineHeight', '1.5');
  const children = text('cntent', 'Open Sans');

  return (
    <Font fontFamily={fontFamily} lineHeight={lineHeight}>
      {children}
    </Font>
  );
};
