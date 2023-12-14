import "./ReviewList.css";

function formatDate(value) {
  const date = new Date(value);
  console.log(date);
  return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()} `;
}

// 데이터를 받을 파라미터들은 여기(js)에 있음.
function ReviewListItem({ item, onDelete }) {
  const handDeleteClick = () => onDelete(item.id);

  return (
    <div className="ReviewListItem">
      <img className="ReviewListItem-img" src={item.imgUrl} />
      <div>
        <h1>{item.title}</h1>
        <span>{item.rating}</span>
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
        <button onClick={handDeleteClick}>삭제</button>
      </div>
    </div>
  );
}

function ReviewList({ items, onDelete }) {
  return (
    <ul>
      {/* 어떠한 반복 데이터들을 쓸때는 map함수를 쓴다 */}
      {items.map((item) => {
        return (
          // 삭제같은 기능이 있을때는 react를 위해 key 값을 써줘야한다.
          <li key={item.id}>
            <ReviewListItem item={item} onDelete={onDelete} />
            <input type="text" />
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewList;
