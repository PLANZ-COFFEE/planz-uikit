// external moudles
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

export enum fontTypes {
  title = 'title',
  contentEn = 'contentEn',
  contentKrNum = 'contentkrNum',
}

/** Font props */
export type FontProps = {
  type: string;
  children: string | number;
  fontFamily?: string;
  letterSpacing?: string | number;
  lineHeight?: string | number;
  color?: string;
  fontSize?: string | number;
};

/** Font 컴포넌트 */
const Font = ({ type, children, fontFamily, letterSpacing, lineHeight, color, fontSize }: FontProps): JSX.Element => {
  const cssForType = (fontType: string) => {
    const cssType = {};

    switch (fontType) {
      case 'title':
        cssType['font-family'] = 'Times Sans Serif';
        cssType['line-height'] = lineHeight || 1.2;
        break;
      case 'contentEn':
        cssType['font-family'] = 'Open Sans';
        cssType['line-height'] = lineHeight || 1.5;
        break;
      case 'contentKrNum':
        cssType['font-family'] = 'Spoqa Han Sans';
        cssType['line-height'] = lineHeight || 1.6;
        break;
    }

    const cssResult = Object.keys(cssType)
      .map(obj => `${obj}: ${cssType[obj]};`)
      .join('\n');

    return css`
      @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
      @import url('https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css');
      color: ${color};
      font-size: ${fontSize};
      letter-spacing: ${letterSpacing};
      ${cssResult};
    `;
  };

  console.log(cssForType(type));

  return <div css={cssForType(type)}>{children}</div>;
};

export default Font;
