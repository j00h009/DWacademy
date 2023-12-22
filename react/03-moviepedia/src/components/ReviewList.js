import { useContext, useState } from "react";
import "./ReviewList.css";
import ReviewForm from "./ReviewForm";
import LocaleContext from "../contexts/LocaleContext";

function formatDate(value) {
  const date = new Date(value);
  // console.log(date);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()} `;
}

// 데이터를 받을 파라미터들은 여기(js)에 있음.
function ReviewListItem({ item, onDelete, onEdit }) {
  const locale = useContext(LocaleContext);

  const handleDeleteClick = () => onDelete(item.docId, item.imgUrl);
  const handleEditClick = () => {
    onEdit(item.id);
  };

  return (
    <div className="ReviewListItem">
      <img className="ReviewListItem-img" src={item.imgUrl} />
      <div>
        <h1>{item.title}</h1>
        <span>{item.rating}</span>
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
        {/* <p>현재언어 : {locale}</p> */}
        <button onClick={handleEditClick}>수정</button>
        <button onClick={handleDeleteClick}>삭제</button>
      </div>
    </div>
  );
}

function ReviewList({ items, onDelete, onUpdate, onUpdateSuccess }) {
  const [editingId, setEditingId] = useState(null);

  return (
    <ul>
      {/* 어떠한 반복 데이터들을 쓸때는 map함수를 쓴다 */}
      {items.map((item) => {
        if (item.id === editingId) {
          const { title, rating, content, imgUrl, docId } = item;
          const initialValues = { title, rating, content, imgUrl: null };

          const handleCancel = () => setEditingId(null);

          const handleSubmit = (collectionName, formData) => {
            const result = onUpdate(collectionName, formData, docId, imgUrl);
            if (result === null) {
              alert("리뷰룰 수정할 수 없습니다.\n관리자에게 문의하세요.");
              return;
            }
            return result;
            // result 안에는 review가 담겨있다.
          };

          const handleSubmitSuccess = (review) => {
            onUpdateSuccess(review);
            setEditingId(null);
          };

          return (
            <li key={item.id}>
              <ReviewForm
                initialValues={initialValues}
                initialPreview={imgUrl}
                onCancel={handleCancel}
                onSubmit={handleSubmit}
                onSubmitSuccess={handleSubmitSuccess}
              />
            </li>
          );
        }

        return (
          // 삭제같은 기능이 있을때는 react를 위해 key 값을 써줘야한다.
          <li key={item.id}>
            <ReviewListItem
              item={item}
              onDelete={onDelete}
              onEdit={setEditingId}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewList;
