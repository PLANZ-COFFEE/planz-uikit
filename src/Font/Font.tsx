// external moudles
/** @jsx jsx */
import { jsx } from '@emotion/core';

/** Font props */
export type FontProps = {
  title?: string | number;
  content?: string | number;
  fontFamily?: string;
  letterSpacing?: string | number;
  lineHeight?: string | number;
  children: string | number;
};

/** Font 컴포넌트 */
const Font = ({ children, title, content, fontFamily, letterSpacing, lineHeight }: FontProps): JSX.Element => {
  return (
    <div css={{ fontFamily, letterSpacing, lineHeight }}>
      {title}
      {content}
      {children}
    </div>
  );
};

export default Font;
