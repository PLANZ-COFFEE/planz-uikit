// external modules
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

type LogoProps = {
  /** 로고 이미지 props */
  logo: string;
};

/** coral pink 로고 */
const LogoCoralPink = ({ logo }: LogoProps): unknown => {
  return <img src={logo} css={logoSize} />;
};

const logoSize = css`
  width: 500px;
`;

export default LogoCoralPink;
