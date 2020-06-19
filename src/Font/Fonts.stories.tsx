// external modules
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { text, number, withKnobs } from '@storybook/addon-knobs';

// internal modules
import Font from './Font';

export default {
  title: 'components|Fonts',
  component: Font,
  decorators: [withKnobs],
};

enum fontTypes {
  title = 'title',
  contentEn = 'contentEn',
  contentKrNum = 'contentkrNum',
}

export const contentEn = (type: string): JSX.Element => {
  const fontFamily = text('fontFamily', 'Open Sans');
  const lineHeight = number('lineHeight', 1.5);
  const children = text('children', 'Hello, everybody!');

  type = 'contentEn';

  return (
    <Font fontFamily={fontFamily} lineHeight={lineHeight} type={type}>
      {children}
    </Font>
  );
};
