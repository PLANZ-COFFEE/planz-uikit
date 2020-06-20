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

export const title = (type: string): JSX.Element => {
  const fontFamily = text('fontFamily', 'Times Sans Serif');
  const lineHeight = number('lineHeight', 1.2);
  const children = text('children', 'Hello, title!');

  type = 'title';

  return (
    <Font fontFamily={fontFamily} lineHeight={lineHeight} type={type}>
      {children}
    </Font>
  );
};

export const contentEn = (type: string): JSX.Element => {
  const fontFamily = text('fontFamily', 'Open Sans');
  const lineHeight = number('lineHeight', 1.5);
  const children = text('children', 'Hello, contentEn!');

  type = 'contentEn';

  return (
    <Font fontFamily={fontFamily} lineHeight={lineHeight} type={type}>
      {children}
    </Font>
  );
};

export const contentKrNum = (type: string): JSX.Element => {
  const onlyNum = /[0-9]+/gim;
  // const onlyKr = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+/gim;
  const fontFamily = text('fontFamily', 'Spoqa Han Sans');
  const lineHeight = number('lineHeight', 1.6);
  const children = text('content', '한글 혹은 1234');
  const color = text('color', undefined);
  const fontSize = number('fontSize', undefined);

  type = 'contentKrNum';

  const KrOrNum = (children, index) =>
    children.match(onlyNum) ? (
      <span css={numSpan} key={index}>
        {children}
      </span>
    ) : (
      <span css={krSpan} key={index}>
        {children}
      </span>
    );

  return (
    <Font fontFamily={fontFamily} lineHeight={lineHeight} color={color} fontSize={fontSize}>
      {Array.from(children).map(KrOrNum)}
    </Font>
  );
};

const numSpan = css`
  letter-spacing: 0;
`;

const krSpan = css`
  letter-spacing: -0.32px;
`;
