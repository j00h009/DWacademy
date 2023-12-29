# Markdown (마크다운) 문법 정리

### 1. 제목(Header)

# 제목 1

## 제목 2

### 제목 3

#### 제목 4

##### 제목 5

###### 제목 6

### 2. 강조(Emphasis)

강조 : 주로 Command(Ctrl) + B
언더바(\_) , 별표(\*) , 물결표시(~) 사용

이텔릭체는 _별표(asterisks)_ 혹은 *언더바(underscore)*를 사용하세요.
두껍게는 **별표(asterisks)** 혹은 **언더바(underscore)**를 사용하세요.
***이텔릭체*와 두껍게**를 같이 사용할 수 있습니다.
취소선은 ~~물결표시(tilde)~~를 사용하세요.
<u>밑줄</u>은 `<u></u>`를 사용하세요.

### 3. 목록(List)

1. 순서가 필요한 경우
2. 순서가 필요한 경우
   1. 순서 1
   2. 순서 2

- 순서가 필요하지 않은 목록에 사용 가능한 기호
  - 대쉬(hyphen)
  * 별표(asterisks)
  - 더하기(plus sign)

### 4. 링크(Links)

[GOOGLE](https://google.com)

[NAVER](https://naver.com "링크 설명(title)을 작성하세요.")

[상대적 참조](../users/login)

[Dribbble][Dribbble link]

[GitHub][1]

문서 안에서 [참조 링크]를 그대로 사용할 수도 있습니다.

다음과 같이 문서 내 일반 URL이나 꺾쇠 괄호(`< >`, Angle Brackets)안의 URL은 자동으로 링크를 사용합니다.
구글 홈페이지: https://google.com
네이버 홈페이지: <https://naver.com>

[Dribbble link]: https://dribbble.com
[1]: https://github.com
[참조 링크]: https://naver.com "네이버로 이동합니다!"

### 5. 이미지(Images)

![대체 텍스트(alternative text)를 입력하세요!](http://www.gstatic.com/webp/gallery/5.jpg "링크 설명(title)을 작성하세요.")

![Kayak][logo]

[logo]: http://www.gstatic.com/webp/gallery/2.jpg "To go kayaking."

이미지에 링크
마크다운 이미지 코드를 링크 코드로 묶어 줍니다.
[![Vue](/images/vue.png)](https://kr.vuejs.org/)

### 6. 블록(block) 코드 강조

`를 3번 이상 입력하고 코드 종류도 적습니다.

```html
<a href="https://www.google.co.kr/" target="_blank">GOOGLE</a>
```

```css
.list > li {
  position: absolute;
  top: 40px;
}
```

```javascript
function func() {
  var a = "AAA";
  return a;
}
```

```bash
$ vim ./~zshrc
```

```python
s = "Python syntax highlighting"
print s
```

```
No language indicated, so no syntax highlighting.
But let's throw in a tag.

```

### 7. 수평선(Horizontal Rule)

: 각 기호를 3개 이상 입력하세요.

---

(Hyphens)

**_---_**

(Asterisks)

---

(Underscores)

### 8.줄바꿈(Line Breaks)

동해물과 백두산이 마르고 닳도록
하느님이 보우하사 우리나라 만세 <!--띄어쓰기 2번-->
무궁화 삼천리 화려 강산<br>
대한 사람 대한으로 길이 보전하세
