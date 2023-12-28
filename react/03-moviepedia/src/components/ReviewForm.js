import { useState } from "react";
import FileInput from "./FileInput";
import RatingInput from "./RatingInput";
import useTranslate from "../hooks/useTranslate";

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
  const t = useTranslate();

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
        placeholder={t("title placeholder")}
      />
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
        placeholder={t("content placeholder")}
      />
      {onCancel && <button onClick={onCancel}>{t("cancel button")}</button>}
      <button type="submit" disabled={isSubmitting}>
        {t("confirm button")}
      </button>
      {submittingError?.message && <div>{submittingError.message}</div>}
    </form>
  );
}

export default ReviewForm;
