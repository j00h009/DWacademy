import styled from "styled-components";
import Link from "./Link";
import Input from "./Input";
import Label from "./Label";
import Button from "./Button";
import KakaoButton from "./KakaoButton";

const Logo = styled.h1`
  font-family: Pretendard;
  text-align: center;
  font-size: 40px;
  background-image: linear-gradient(135deg, aqua, purple);
  background-clip: text;
  color: transparent;
`;

const Description = styled.div`
  color: #848187;
  text-align: center;
`;

const Container = styled.div`
  width: 400px;
  margin: 40px auto;

  ${Input} {
    margin-bottom: 16px;
  }
  ${Button} {
    width: 100%;
    margin: 8px 0;
  }
`;

function Login() {
  return (
    <Container>
      <Logo>DW 온라인스쿨</Logo>
      <Description>
        회원이 아니신가요? <Link href="#">회원가입하기</Link>
      </Description>
      <form>
        <Label htmlFor="email">이메일</Label>
        <Input type="email" id="email" placeholder="styled@DW.kr"></Input>
        <Label htmlFor="password">비밀번호</Label>
        <Input type="password" id="password" placeholder="비밀번호"></Input>
        <Button type="submit">로그인 하기</Button>
      </form>
      <KakaoButton />
    </Container>
  );
}
export default Login;
