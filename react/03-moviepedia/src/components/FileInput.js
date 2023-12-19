import React, { useEffect, useRef, useState } from "react";

const FileInput = ({ name, onChange, value }) => {
  const inputRef = useRef();
  const [preview, setPreview] = useState({});

  const handleChange = (e) => {
    const nextFile = e.target.files[0];
    onChange(name, nextFile);
  };

  useEffect(() => {
    // 값이 없을 수도 있기 때문에 useEffect를 종료해준다.
    if (!value) return;
    // ObjectURL 객체를 사용하여 미리보기 기능을 구현할 수 있다.
    // 미리보기 이미지가 화면에 보일 수 있도록 하는 곳.
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);
  }, [value]);

  return (
    <div>
      <img src={preview} alt="이미지 미리보기" />
      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleChange}
        ref={inputRef}
      />
    </div>
  );
};

export default FileInput;
