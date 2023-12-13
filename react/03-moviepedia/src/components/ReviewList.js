import "./ReviewList.css";

function ReviewListItem({ item, onDelete }) {
  const handDeleteClick = () => onDelete(item.id);

  return (
    <div className="ReviewListItem">
      <img className="ReviewListItem-img" src={item.imgUrl} />
      <div>
        <h1>{item.title}</h1>
        <span>{item.rating}</span>
        <p>{item.createdAt}</p>
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
          <li key={item.id}>
            <ReviewListItem item={item} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewList;
