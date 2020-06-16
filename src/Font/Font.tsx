// external moudles
/** @jsx jsx */
import { jsx } from '@emotion/core';

/** Font props */
export type FontProps = {
  children: string | number;
  fontFamily?: string;
  letterSpacing?: string | number;
  lineHeight?: string | number;
};

/** Font 컴포넌트 */
const Font = ({ children, fontFamily, letterSpacing, lineHeight }: FontProps): JSX.Element => {
  return <div css={{ fontFamily, letterSpacing, lineHeight }}>{children}</div>;
};

export default Font;
