import styled from "styled-components";

const SIZES = {
  large: 24,
  medium: 20,
  small: 16,
};

const Input = styled.input`
  border: 2px solid ${({ $error }) => ($error ? `#f44336` : `#eee`)};
  border-radius: ${({ $round }) => ($round ? `9999px` : `4px`)};
  outline: none;
  padding: 16px;
  font-size: ${({ size }) => SIZES[size] ?? SIZES["medium"]}px;

  ${({ $error }) =>
    !$error &&
    `&:focus{
    border-color:#7760b4
  }`}
`;

export default Input;
