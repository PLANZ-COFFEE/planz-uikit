// 외부 모듈
/**@jsx jsx */
import { jsx, css } from '@emotion/core';

// 내부 모듈
import LogoPng from '@/LogoBlack/images/Logo.png';

const Logo = () => {
  return <img css={logoImg} src={LogoPng} alt="logo" />;
};

const logoImg = css`
  max-width: 300px;
`;

export default Logo;
