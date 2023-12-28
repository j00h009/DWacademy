import styled from "styled-components";
import nailImg from "./nail.png";

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

const StyledButton = styled.button`
  background-color: #6750a4;
  border: none;
  color: #fff;
  padding: 16px;

  /* &: 자기자신을 선택한다. */
  /* ${Icon} : 변수를 사용하기 위해 */

  &:hover,
  &:active {
    background-color: #463770;

    ${Icon} {
      opacity: 0.2;
    }
  }

  & ${Icon} {
    margin-right: 4px;
  }
`;

function Button({ children }) {
  return (
    <StyledButton>
      <Icon src={nailImg} alt="nail icon" />
      {children}
    </StyledButton>
  );
}

export default Button;
