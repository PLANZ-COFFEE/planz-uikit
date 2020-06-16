// external modules
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { text, number, withKnobs } from '@storybook/addon-knobs';

// internal modules
import Font from './Font';

export default {
  title: 'components|Fonts',
  component: Font,
  decorators: [withKnobs],
};

export const contentEn = (): JSX.Element => {
  const fontFamily = text('fontFamily', 'Open Sans');
  const lineHeight = number('lineHeight', 1.5);
  const children = text('children', 'Hello, everybody!');

  return (
    <Font fontFamily={fontFamily} lineHeight={lineHeight}>
      {children}
    </Font>
  );
};
