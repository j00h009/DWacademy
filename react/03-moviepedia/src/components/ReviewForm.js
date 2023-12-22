import { useState } from "react";
import FileInput from "./FileInput";
import RatingInput from "./RatingInput";

const INITIAL_VALUES = {
  title: "",
  rating: 0,
  content: "",
  imgUrl: null,
};

function ReviewForm({
  onSubmit,
  onSubmitSuccess,
  initialValues = INITIAL_VALUES,
  initialPreview,
  onCancel,
}) {
  const [values, setValues] = useState(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingError, setSubmittingError] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title: values.title,
      content: values.content,
      imgUrl: values.imgUrl,
      rating: values.rating,
    };

    // 파이어베이스에 객체 형식으로 담아준다.
    try {
      setSubmittingError(null);
      setIsSubmitting(true);
      const { review } = await onSubmit("movie", formData);
      onSubmitSuccess(review);
    } catch (error) {
      setSubmittingError(error);
      return;
    } finally {
      setIsSubmitting(false);
    }
    setValues(INITIAL_VALUES);
  };

  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <FileInput
        name="imgUrl"
        value={values.imgUrl}
        initialPreview={initialPreview}
        onChange={handleChange}
      />
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
      {onCancel && <button onClick={onCancel}>취소</button>}
      <button type="submit" disabled={isSubmitting}>
        확인
      </button>
      {submittingError?.message && <div>{submittingError.message}</div>}
    </form>
  );
}

export default ReviewForm;
