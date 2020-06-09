// external modules
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

// internal modules
import { LOGO_WIDTH } from 'constants';

/** 화이트 로고 props */
export type LogoWhiteProps = {
  logo: string;
};

/** LogoWhite 컴포넌트 */
const LogoWhite = ({ logo }: LogoWhiteProps): JSX.Element => {
  return <img src={logo} css={logoSize} />;
};

const logoSize = css`
  width: ${LOGO_WIDTH};
`;

export default LogoWhite;
