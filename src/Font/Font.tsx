// external modules
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

/** Font props */
type FontProps = {
  children: string | number;
  fontFamily?: string;
  letterSpacing?: string | number;
  lineHeight?: string | number;
  color?: string;
  fontSize?: number;
};

/** Font 컴포넌트 */
const Font = ({ children, fontFamily, letterSpacing, lineHeight, color, fontSize }: FontProps): JSX.Element => {
  return (
    <div
      css={css`
        font-family: ${fontFamily};
        letter-spacing: ${letterSpacing};
        line-height: ${lineHeight};
        color: ${color};
        font-size: ${fontSize};
      `}
    >
      {children}
    </div>
  );
};

export default Font;
