import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  ${Button} {
    margin: 10px;
  }
`;

// HTML태그의 속성들은 표준속성과 비표준속성으로 나눠진다.
// 코드 가독성, 성능최적화, 브라우저 비표준속성과 안겹치게 사용가능.

function DynamicStyling() {
  return (
    <Container>
      <h1>기본 버튼</h1>
      <Button size="small">small</Button>
      <Button size="medium">medium</Button>
      <Button size="large">large</Button>
      <h1>둥근 버튼</h1>
      <Button size="small" $round>
        round small
      </Button>
      <Button size="medium" $round>
        round medium
      </Button>
      <Button size="large" $round>
        round large
      </Button>
    </Container>
  );
}

export default DynamicStyling;
