import styled from "styled-components";
import Link from "./Link";
import Input from "./Input";
import Label from "./Label";
import Button from "./LoginButton";
import KakaoButton from "./KakaoButton";
import { useState } from "react";
import { getMember } from "../api/firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { useMember, useSetMember } from "../contexts/MemberContext";

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
  // const member = useMember();
  // const setMember = useSetMember();

  const { state } = useLocation();
  const props = useLocation();
  console.log(props);
  const navigate = useNavigate();
  const [values, setValues] = useState({
    id: "",
    password: "",
  });

  const handleValueChange = (e) => {
    // state를 변경해줘야한다.
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // submit 할때 사용하는 handleLogin
  // 파이어베이스 함수 사용
  const handleLogin = async (e) => {
    e.preventDefault();

    const { memberObj, message } = await getMember(values);
    if (message === undefined) {
      localStorage.setItem("member", JSON.stringify(memberObj));
      // memberObj(어떠한 객체, 배열) 문자열로 바꾸는 방법 => JSON.stringify(memberObj)
      // localStorage.setItem("key", data);
      // 아이템을 셋팅

      // alert("로그인에 성공했습니다.");
      // window.location.href = "/";
      // setMember(memberObj);
      // navigate("/");
      // navigate => 컴포넌트만 변경해준다.
      navigate(state ? state : "/");
    } else {
      alert(message);
    }
  };

  return (
    <Container>
      <Logo>DW 온라인스쿨</Logo>
      <Description>
        회원이 아니신가요? <Link href="#">회원가입 하기</Link>
      </Description>
      <form onSubmit={handleLogin}>
        <Label htmlFor="email">이메일</Label>
        <Input
          type="email"
          name="id"
          id="email"
          placeholder="styled@DW.kr"
          onChange={handleValueChange}
        />
        <Label htmlFor="password">비밀번호</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="비밀번호"
          onChange={handleValueChange}
        />
        <Button type="submit">로그인 하기</Button>
      </form>
      <KakaoButton />
    </Container>
  );
}

export default Login;
