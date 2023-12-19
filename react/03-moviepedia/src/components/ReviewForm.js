import { useState } from "react";
import FileInput from "./FileInput";
import RatingInput from "./RatingInput";

function ReviewForm() {
  const [values, setValues] = useState({
    title: "",
    rating: 0,
    content: "",
    imgUrl: null,
  });

  const handleChange = (name, value) => {
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  // value를 사용할 수 있는 녀석들을 위한, 텍스트를 직접 입력하는 녀석들.
  const handleInputChange = (e) => {
    // let name, value;
    // if (e.files !== null) {
    //   value = e.target.files[0];
    // } else {
    //   value = e.target.value;
    // }
    // name = e.target.name;
    // ↑ 동일한 방법
    const { name, value } = e.target;
    handleChange(name, value);
  };

  // [name] : title / value : ""
  // ↓ 원본
  //   setValues((prevValues) => {
  //     return{...prevValues, [name]: value}
  //   });
  // };

  //   const handleTitleChange = (e) => {
  //     setTitle(e.target.value);
  //   };
  //   const handleRatingChange = (e) => {
  //     setRating(Number(e.target.value));
  //   };
  //   const handleContentChange = (e) => {
  //     setContent(e.target.value);
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <FileInput name="imgUrl" value={values.imgUrl} onChange={handleChange} />
      <input
        type="text"
        name="title"
        value={values.title}
        onChange={handleInputChange}
      />
      {/* oninput 이벤트는 input 태그 안의 값들이 변경 될때마다 이벤트가 발생한다. */}
      {/* onchange 이벤트는 input 태그의 포커스를 벗어났을때 (즉, 입력이 끝났을때) 발생하는 이벤트이다. */}
      <RatingInput
        type="number"
        name="rating"
        value={values.rating}
        onChange={handleChange}
      />
      <textarea
        name="content"
        value={values.content}
        onChange={handleInputChange}
      />
      <button type="submit">확인</button>
    </form>
  );
}

export default ReviewForm;
