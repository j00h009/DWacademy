import React from "react";

const RATINGS = [1, 2, 3, 4, 5];

function Star({ selected = false, rating, onSelect, onHover }) {
  const className = `Rating-star ${selected ? "selected" : ""}`;

  const handleClick = () => onSelect(rating);
  const handleMouseOver = () => onHover(rating);
  return (
    <span
      className={className}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
    >
      ★
    </span>
  );
}

const Rating = ({
  className,
  hoverRating = 0,
  onSelect,
  onHover,
  onMouseOut,
}) => {
  return (
    <div className={className} onMouseOut={onMouseOut}>
      {RATINGS.map((arrNum) => (
        // arrNum = rating 이다.
        <Star
          key={arrNum}
          selected={hoverRating >= arrNum}
          rating={arrNum}
          onSelect={onSelect}
          onHover={onHover}
        />
      ))}
    </div>
  );
};

export default Rating;
