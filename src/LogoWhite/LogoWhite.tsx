// external modules
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

// internal modules
import logoImg from '@/img/logo_white.png';

export type LogoWhiteProps = {
  name: string;
};

/** LogoWhite 컴포넌트 */
const LogoWhite = ({ name }: LogoWhiteProps): unknown => {
  return (
    <div>
      <h1>{name}</h1>
      <img src={logoImg} css={logoSize} />
    </div>
  );
};

const logoSize = css`
  width: 500px;
`;

export default LogoWhite;
